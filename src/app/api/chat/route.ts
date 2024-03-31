import { connect } from "@/config/dbConfig";
import { NextRequest, NextResponse } from "next/server";


import { Chat } from "@/schema/chat";
import {GoogleGenerativeAI} from "@google/generative-ai"
import convertArrayToData from "@/util";
export async function POST(request: NextRequest) {
	await connect();
	try {
		
		const reqBody = await request.json();

		if (!reqBody.userInput) {
			throw new Error("Missing 'input' field in the request body");
		}
 //for test only. use env for your key
		const genAI=new GoogleGenerativeAI("AIzaSyCjqn20W22omCJ3pW5qWBhylTPAlwz1vJ8")

		const model=genAI.getGenerativeModel({model:"gemini-pro"})

		
		const questionTemplate = `
		You are AI bot assistant and Your name is sabi AI made by Lans Kaba. you are here to help human when given an input question. You must answer all questions only in markdown format!.
		question: ${reqBody.userInput}.
		`;
		

		const chat_History = await Chat.find({
			conversationId: reqBody.conversationId,
		}).sort({ _id: 1 });
		const conver_History = convertArrayToData(chat_History);


		const chat=model.startChat({
			history:conver_History
		})
		const result=await chat.sendMessage(reqBody.userInput)
         const res=await result.response.text()

		const reqData = {
			userInput: reqBody.userInput,
			userId: reqBody.userId,
			conversationId: reqBody.conversationId,
			AIOutput: res,
		};

		const newChat = new Chat(reqData);
		const saveData = await newChat.save();

		const chats = await Chat.find({
			conversationId: saveData.conversationId,
			_id: { $ne: saveData._id },
		});
		const response = NextResponse.json(
			{
				message: "New Chat created successfully",
				success: true,
				data: { newChat: saveData, chats: chats },
			},
			{ status: 200 }
		);
		return response;
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

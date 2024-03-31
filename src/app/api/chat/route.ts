import { connect } from "@/config/dbConfig";
import { NextRequest, NextResponse } from "next/server";

import { Chat } from "@/schema/chat";
import { GoogleGenerativeAI } from "@google/generative-ai";
import convertArrayToData from "@/util";
export async function POST(request: NextRequest) {
	await connect();
	try {
		const reqBody = await request.json();

		if (!reqBody.userInput) {
			throw new Error("Missing 'input' field in the request body");
		}
		//for test only. use env for your key
		const genAI = new GoogleGenerativeAI(
			"AIzaSyCjqn20W22omCJ3pW5qWBhylTPAlwz1vJ8"
		);

		const model = genAI.getGenerativeModel({ model: "gemini-pro" });

		const questionTemplate = `
		You are AI bot assistant and Your name is sabi AI made by Lans Kaba. you are here to help human when given an input question. You must answer all questions only in markdown format!.
		question: ${reqBody.userInput}.
		`;

		const chat_History = await Chat.find({
			conversationId: reqBody.conversationId,
		}).sort({ _id: 1 });
		const conver_History = convertArrayToData(chat_History);

		const chatModel = model.startChat({
			history: [
				{
					role: "user",
					parts: [{ text: "Hello, I have 2 dogs in my house." }],
				},
				{
					role: "model",
					parts: [{ text: "Great to meet you. What would you like to know?" }],
				},
			],
			generationConfig: {
				maxOutputTokens: 100,
			},
		});

		const result = await chatModel.sendMessage(questionTemplate);
		const responseAi = await result.response;
		const res = responseAi.text();

		const reqData = {
			userInput: questionTemplate,
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

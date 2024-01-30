import { connect } from "@/config/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";

import { Chat } from "@/schema/chat";

import { StringOutputParser } from "langchain/schema/output_parser";
import {
	RunnablePassthrough,
	RunnableSequence,
} from "langchain/schema/runnable";
import convertArrayToData from "@/util";
export async function POST(request: NextRequest) {
	await connect();
	try {
		await connect();

		const reqBody = await request.json();

		if (!reqBody.userInput) {
			throw new Error("Missing 'input' field in the request body");
		}

		const model = new OpenAI({ temperature: 0 });
		const answerTemplate = `
		You are AI bot assistant and Your name is sabi AI made by Lans Kaba. you are here to help human when given an input question, generate a response that is informative, coherent, and contextually appropriate. also check in the conversation history between you and the human which will also help you to find response that is related to the input question. You must answer all questions only in markdown format!.
		question: {question}
		conversation history:{conv_history}
		answer:
		`;
		const answerPrompt = PromptTemplate.fromTemplate(answerTemplate);
		const answerChain = answerPrompt.pipe(model).pipe(new StringOutputParser());

		const chainS = RunnableSequence.from([
			{
				original_input: new RunnablePassthrough(),
			},
			{
				question: ({ original_input }) => original_input.question,
				conv_history: ({ original_input }) => original_input.conv_history,
			},
			answerChain,
		]);

		const chat_History = await Chat.find({
			conversationId: reqBody.conversationId,
		}).sort({ _id: 1 });
		const conver_History = convertArrayToData(chat_History);

		const result = await chainS.invoke({
			question: reqBody.userInput,
			conv_history: conver_History,
		});

		const reqData = {
			userInput: reqBody.userInput,
			userId: reqBody.userId,
			conversationId: reqBody.conversationId,
			AIOutput: result,
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

import { connect } from "@/config/dbConfig";
import { NextRequest, NextResponse } from "next/server";

import { Conversation } from "@/schema/chat";

export async function POST(request: NextRequest) {
	await connect();
	try {
		await connect();

		const reqBody = await request.json();

		if (!reqBody.name) {
			throw new Error("Missing 'Name' field in the request body");
		}

		const generatedName = reqBody.name.split(" ").slice(0, 10).join(" ");

		const consversationData: any = {
			name: generatedName,
			userId: reqBody.userId,
		};

		const newConversation = new Conversation(consversationData);
		const saveData = await newConversation.save();
		const response = NextResponse.json(
			{
				message: "New Conversation created successfully",
				success: true,
				data: saveData,
			},
			{ status: 200 }
		);
		return response;
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

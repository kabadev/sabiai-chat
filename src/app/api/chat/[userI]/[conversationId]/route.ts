import { connect } from "@/config/dbConfig";
import {
	Conversation,
	deleteChatsByConvId,
	deleteConvById,
	getChats,
} from "@/schema/chat";

import { NextRequest, NextResponse } from "next/server";

export async function GET(
	request: NextRequest,
	{ params }: { params: { userI: string; conversationId: string } }
) {
	try {
		await connect();
		const userId = params.userI;
		const conversationId = params.conversationId;
		if (!userId) {
			throw new Error("Missing 'useId' field in the params");
		}
		if (!conversationId) {
			throw new Error("Missing 'conversationId' field in the params");
		}
		const chats = await getChats(conversationId);
		const response = NextResponse.json(
			{
				message: "success",
				success: true,
				data: chats,
			},
			{ status: 200 }
		);
		return response;
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: { userI: string; conversationId: string } }
) {
	try {
		await connect();
		const userId = params.userI;
		const conversationId = params.conversationId;
		if (!userId) {
			throw new Error("Missing 'useId' field in the params");
		}
		if (!conversationId) {
			throw new Error("Missing 'conversationId' field in the params");
		}
		const conversationIdToDelete = await Conversation.findById(conversationId);
		if (!conversationIdToDelete) {
			throw new Error("Conversation is not found");
		}
		await deleteConvById(conversationId);
		await deleteChatsByConvId(conversationId);
		const response = NextResponse.json(
			{
				message: "Conversation Deleted Successfully",
				success: true,
				data: conversationIdToDelete,
			},
			{ status: 200 }
		);
		return response;
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

import { connect } from "@/config/dbConfig";
import { getConversation } from "@/schema/chat";

import { NextRequest, NextResponse } from "next/server";

export async function GET(
	request: NextRequest,
	{ params }: { params: { userI: string } }
) {
	try {
		const userId = params.userI;
		await connect();
		if (!userId) {
			throw new Error("Missing 'useId' field in the params");
		}
		const conversations = await getConversation(userId);
		const response = NextResponse.json(
			{
				message: "success",
				success: true,
				data: conversations,
			},
			{ status: 200 }
		);
		return response;
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

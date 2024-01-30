import mongoose from "mongoose";
import { Document, Types } from "mongoose";

const conversationSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	userId: {
		type: String,
		required: true,
	},
});

const chatSchema = new mongoose.Schema({
	userInput: {
		type: String,
		required: true,
	},
	AIOutput: {
		type: String,
		// required: true,
	},
	conversationId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Conversation",
	},
	userId: {
		type: String,
		ref: "User",
	},
});

const Conversation =
	mongoose.models.Conversation ||
	mongoose.model("Conversation", conversationSchema);
const Chat = mongoose.models.Chat || mongoose.model("Chat", chatSchema);

export { Conversation, Chat };

export const getConversation = (userId: string): Promise<any[]> => {
	return Conversation.find({ userId }).sort({ _id: -1 });
};
export const getChats = (conversationId: string): Promise<any[]> => {
	return Chat.find({ conversationId }).sort({ _id: 1 });
};

export const deleteConvById = (id: string): Promise<any | null> => {
	return Conversation.findByIdAndDelete(id).exec();
};

export const deleteChatsByConvId = (
	conversationId: string
): Promise<any | null> => {
	return Chat.deleteMany({ conversationId }).exec();
};

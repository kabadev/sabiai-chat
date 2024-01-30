"use client";
import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { code2 } from "@/constants";

export type NewChatData = {
	userInput: string;
	userId?: string | null;
	AIOutput?: string;
};

export type ChatType = {
	userInput: string;
	userId?: string | null;
	AIOutput: string;
	conversationId?: string;
	_id?: string | undefined;
};

export type conversationType = {
	name: string;
	_id: string;
	userId: string;
};

interface ChatContextProps {
	currentChat: ChatType | null;
	allChats: ChatType[];
	conversation: conversationType | null;
	conversations: conversationType[];
	NewConversation: (data: NewChatData) => void;
	NewChat: (data: NewChatData) => void;
	fetchAllConversations: () => void;
	fetchAllChats: (conversationId: string) => void;
	deleteConversation: (conversationId: string) => void;
	isNewConReady: boolean;
	onnewConReady: () => void;
	resetCurentChat: () => void;
	isLoading: boolean;
	errorMessage: any | null;
	isSubmit: boolean;
}

const ChatContext = createContext<ChatContextProps | null>(null);

export default function ChatContextProvider({
	children,
}: {
	children: ReactNode;
}) {
	const { user } = useUser();
	const router = useRouter();

	const [currentChat, setCurrentChat] = useState<any | null>(null);
	const [conversation, setConversation] = useState<any | null>(null);
	const [conversations, setConversations] = useState<any[]>([]);
	const [allChats, setAllChats] = useState<any[]>([]);

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isNewConReady, setIsNewConReady] = useState<boolean>(false);
	const [isSubmit, setIsSubmit] = useState(false);

	const [errorMessage, setErrorMessage] = useState<any | null>(null);

	const NewConversation = async (NewChatData: any) => {
		try {
			setIsSubmit(true);
			setIsNewConReady(true);
			setErrorMessage(null);
			setAllChats([]);
			setCurrentChat({ userInput: NewChatData.userInput });
			const conversationData: any = {
				name: NewChatData.userInput,
				userId: user?.id,
			};
			const result = await axios.post(
				"/api/chat/conversation",
				conversationData
			);

			const newConversation = result.data.data;
			setConversation(newConversation);
			setConversations([newConversation, ...conversations]);
			const chatData: any = {
				userInput: NewChatData.userInput,
				userId: user?.id,
				conversationId: newConversation._id,
			};
			router.push("/chat/" + newConversation._id);
			const res = await axios.post(`/api/chat/`, chatData);
			const newChatResult = res.data.data;
			setCurrentChat(newChatResult.newChat);

			setIsSubmit(false);
		} catch (error) {
			setErrorMessage("Something went wrong");
			console.error(error);
			setIsSubmit(false);
		}
	};

	const NewChat = async (NewChatData: any) => {
		try {
			setIsSubmit(true);
			setCurrentChat(null);
			setErrorMessage(null);
			setCurrentChat({ userInput: NewChatData.userInput });

			const data: any = {
				userInput: NewChatData.userInput,
				userId: user?.id,
				conversationId: NewChatData.conversationId,
			};

			const result = await axios.post(`/api/chat/`, data);
			const newResult = result.data.data;
			setCurrentChat(newResult.newChat);
			setAllChats(newResult.chats);
			setIsSubmit(false);
		} catch (error) {
			setErrorMessage("Something went wrong");
			console.error(error);
			setIsSubmit(false);
		}
	};

	const fetchAllConversations = async () => {
		try {
			setIsLoading(true);
			const res = await axios.get("/api/chat/" + user?.id);
			setConversations(res.data.data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setErrorMessage("Something went wrong"), console.log(error);
		}
	};

	const fetchAllChats = async (conversationId: any) => {
		try {
			setIsLoading(true);
			const res = await axios.get(`/api/chat/${user?.id}/${conversationId}`);
			setAllChats(res.data.data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setErrorMessage("Something went wrong"), console.log(error);
		}
	};

	const deleteConversation = async (conversationId: string | undefined) => {
		try {
			const deletedConversation = await axios.delete(
				`/api/chat/${user?.id}/${conversationId}`
			);

			const updatedConversations = conversations.filter(
				(conversation) => conversation._id !== deletedConversation.data.data._id
			);
			setConversations(updatedConversations);
			onnewConReady();
		} catch (error) {
			setErrorMessage("Something went wrong"), console.log(error);
		}
	};
	const onnewConReady = () => {
		setIsNewConReady(false);
		setCurrentChat(null);
		router.push("/chat");
	};
	const resetCurentChat = () => {
		setCurrentChat(null);
		setIsNewConReady(false);
	};

	useEffect(() => {
		function handleHashChange() {
			if (window.location.pathname === "/chat") {
				setIsNewConReady(false);
			}
		}
		window.addEventListener("popstate", handleHashChange);
		return () => {
			window.removeEventListener("popstate", handleHashChange);
		};
	}, []);

	const contextValue: ChatContextProps = {
		currentChat,
		allChats,
		conversation,
		conversations,
		NewConversation,
		NewChat,
		fetchAllConversations,
		fetchAllChats,
		deleteConversation,
		isLoading,
		errorMessage,
		isSubmit,
		isNewConReady,
		onnewConReady,
		resetCurentChat,
	};

	return (
		<ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
	);
}

export const useChatContext = (): ChatContextProps => {
	const context = useContext(ChatContext);
	if (!context) {
		throw new Error("useChatContext must be used within a ChatContextProvider");
	}
	return context;
};

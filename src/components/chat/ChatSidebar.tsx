"use client";
import React, { useEffect } from "react";

import {
	MessageSquare,
	MoreHorizontal,
	MoreVertical,
	Plus,
	Trash2,
	X,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { useChatContext } from "@/context/ChatContext";
import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import { Skeleton } from "../ui/skeleton";

const ChatSidebar = () => {
	const { isSidebarOpen, closeSidebar } = useAppContext();
	const {
		isLoading,
		isNewConReady,
		isSubmit,
		conversations,
		fetchAllConversations,
		onnewConReady,
		resetCurentChat,
		deleteConversation,
	} = useChatContext();
	const { user } = useUser();
	const params: any = useParams();

	useEffect(() => {
		if (!isSubmit && !isNewConReady) {
			if (user) {
				fetchAllConversations();
			}
		}
	}, [user]);

	const onSibarListClick = () => {
		resetCurentChat();
		closeSidebar();
	};
	return (
		<div
			className={cn(
				"w-[350px] h-[calc(100vh-70px)]  px-6 relative max-md:fixed max-md:top-0 max-md:bg-background max-md:z-50 max-md:h-screen max-md:mt-4 max-md:bottom-0 max-md:w-[300px] transition-all duration-300  ",
				isSidebarOpen ? "max-md:left-0" : "max-md:left-[-300px]"
			)}
		>
			<div className="h-[60px]  flex items-center max-md:justify-between w-full">
				<button
					className="bg-accent flex  gap-4 text-foreground px-10 rounded-[5px] p-2 cursor-pointer transition-all duration-300 hover:bg-accent/40"
					onClick={() => {
						onnewConReady(), closeSidebar();
					}}
				>
					<Plus strokeWidth={0.5} />
					New chat
				</button>
				<X className="md:hidden w-10 h-10 p-2 " onClick={closeSidebar} />
			</div>

			<div className="overflow-y-auto  h-[calc(100vh-130px)] ">
				<h3 className="mb-4">Recent:</h3>
				<div className="space-y-2 pr-4 pb-10">
					{!isSubmit && !isNewConReady && isLoading ? (
						<ConversationLoader />
					) : conversations.length > 0 ? (
						conversations.map((conversation, i) => (
							<div
								key={i}
								className="h-14 bg-accent rounded-[5px] cursor-pointer  mb-1 flex gap-3 justify-between items-center  transition-all duration-300 hover:bg-accent/40"
							>
								<Link
									href={`/chat/${conversation._id}`}
									className="h-full flex items-center gap-2 pl-4 w-full"
									onClick={onSibarListClick}
								>
									<div>
										<MessageSquare strokeWidth={0.5} className="w-6 h-6" />
									</div>
									<p className="text-[12px] ">
										{conversation.name.slice(0, 35)}
										{conversation.name.length > 35 ? "..." : ""}
									</p>
								</Link>
								<Popover>
									<PopoverTrigger>
										<MoreVertical className="text-foreground/60" />
									</PopoverTrigger>
									<PopoverContent className="w-[100px] px-2 min-h-[100px]">
										<div
											onClick={() => deleteConversation(conversation._id)}
											className="flex items-center gap-2 bg-accent p-1 rounded-[2px] cursor-pointer  transition-all duration-300 hover:bg-accent/40"
										>
											<Trash2 className="w-4 text-foreground/60" />
											<span className="text-sm">Delete</span>
										</div>
									</PopoverContent>
								</Popover>
							</div>
						))
					) : (
						<div className="flex flex-col justify-center items-center min-h-[200px]">
							<h2 className="text-lg font-bold">No recent chat </h2>
							<p className="text-[0.7rem] leading-4 ">
								Start new chat and all your recent chat will appear here
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ChatSidebar;

export const ConversationLoader = () => {
	return (
		<div className="flex flex-col gap-1">
			<Skeleton className="h-14 w-full rounded-sm bg-accent"></Skeleton>
			<Skeleton className="h-14 w-full rounded-sm bg-accent"></Skeleton>
			<Skeleton className="h-14 w-full rounded-sm bg-accent"></Skeleton>
			<Skeleton className="h-14 w-full rounded-sm bg-accent"></Skeleton>
			<Skeleton className="h-14 w-full rounded-sm bg-accent"></Skeleton>
			<Skeleton className="h-14 w-full rounded-sm bg-accent"></Skeleton>
		</div>
	);
};

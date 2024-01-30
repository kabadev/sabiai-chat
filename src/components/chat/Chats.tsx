"use client";
import { CodeData, code2 } from "@/constants";
import { useChatContext } from "@/context/ChatContext";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { Plus, Volume2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Skeleton } from "../ui/skeleton";
import RecentChats from "./RecentChats";
import Code from "./Code";
import AiLoader from "./AiLoader";
import ErrorMessage from "../ErrorMessage";
import ErrorWrapper from "../ErrorMessage";

const Chats = () => {
	const { isLoading, isSubmit, currentChat, allChats, errorMessage } =
		useChatContext();

	const { user } = useUser();
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		if (currentChat?.AIOutput) {
			setTimeout(() => {
				setIsReady(true);
			}, 1000);
		}
	}, [currentChat]);

	useEffect(() => {
		setIsReady(false);
	}, [currentChat?.AIOutput]);

	// Create a ref for the target div
	const targetDivRef: any = useRef(null);

	useEffect(() => {
		const scrollToOptions = {
			behavior: "smooth",
			block: "start",
			inline: "nearest",
		};

		if (targetDivRef.current) {
			targetDivRef.current.scrollIntoView(scrollToOptions);
		}
	}, [allChats, currentChat]);

	return (
		<div>
			<div className="space-y-4 mb-7">
				<RecentChats />
				{currentChat ? (
					<div ref={targetDivRef} className="space-y-4">
						<div className="flex gap-3 items-center px-">
							<Image
								src={user?.imageUrl!}
								alt=""
								height={100}
								width={100}
								className="w-9 h-9 rounded-full"
							/>
							<h2>{currentChat.userInput}</h2>
						</div>
						<div className="bg-background rounded-2xl px-8 py-4 max-sm:px-2 ">
							<div className="flex items-center justify-between">
								<p className="font-bold">
									Sab<span className="text-myprimary">i</span>
								</p>
								<div className="cursor-pointer transition-all duration-300 hover:bg-accent p-2 rounded-full">
									<Volume2
										strokeWidth={1}
										className="text-foreground"
										// onClick={handleClick}
									/>
								</div>
							</div>
							{errorMessage ? (
								<ErrorWrapper className="text-red-600">
									<p>Something went wrong!</p>
									<p>
										Please try again or refresh your browser. If this error
										continue please contact the support team
									</p>
								</ErrorWrapper>
							) : (
								// <div className="bg-">{errorMessage}</div>
								!isReady && <AiLoader />
							)}

							<div
								className={cn(
									"overflow-hidden transition-all  max-sm:p-2 showing",
									isReady ? "active" : ""
								)}
							>
								<div
									className={cn(
										`transition-all duration-1000   opacity-0 ${
											isReady && "opacity-1"
										}`
									)}
								>
									<ReactMarkdown
										components={{
											pre: ({ node, ...props }) => (
												<div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
													<pre {...props} />
												</div>
											),
											// code: ({ node, ...props }) => (
											// 	<code
											// 		className="bg-black/10 rounded-lg p-1"
											// 		{...props}
											// 	/>
											// ),
											code: Code,
										}}
										className="text-sm overflow-hidden leading-7"
									>
										{currentChat?.AIOutput || ""}
									</ReactMarkdown>
									{/* {currentChat?.AIOutput || ""} */}
								</div>
							</div>
							{/* )} */}
						</div>
					</div>
				) : (
					<div ref={targetDivRef}></div>
				)}
			</div>
		</div>
	);
};

export default Chats;

export const ChatsLoader = () => {
	return (
		<div>
			<div className="flex gap-4 mb-2">
				<Skeleton className="h-14 w-14 mb-2 rounded-full"></Skeleton>
				<Skeleton className="h-14 w-full  mb-2 rounded-full"></Skeleton>
			</div>
			<Skeleton className="h-60"></Skeleton>
		</div>
	);
};

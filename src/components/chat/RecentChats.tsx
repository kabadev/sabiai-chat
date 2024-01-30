"use client";
import { code2, datams } from "@/constants";
import { useChatContext } from "@/context/ChatContext";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Markdown from "markdown-to-jsx";
import { ChatsLoader } from "./Chats";
import { useParams } from "next/navigation";
import Code from "./Code";
import TextToSpeech from "./TextToSpeech";
const RecentChats = () => {
	const { isLoading, isSubmit, allChats, isNewConReady, fetchAllChats } =
		useChatContext();
	const { user } = useUser();
	const params: any = useParams();

	useEffect(() => {
		if (!isSubmit && !isNewConReady) {
			if (user) {
				fetchAllChats(params?.chatid);
			}
		}
	}, [user]);

	return (
		<div>
			{!isSubmit && !isNewConReady && isLoading ? (
				<ChatsLoader />
			) : (
				allChats.map((chat, i) => (
					<div className="space-y-4 mb-7" key={i}>
						<div className="flex gap-3 items-center px-">
							<Image
								src={user?.imageUrl || "/userplaceholder.jpeg"}
								alt="user Image"
								height={100}
								width={100}
								className="w-9 h-9 rounded-full"
							/>
							<h2>{chat.userInput}</h2>
						</div>
						<div className="bg-background rounded-2xl px-8 py-4 max-sm:px-2 ">
							<div className="flex items-center justify-between">
								<p className="font-bold">
									Sab<span className="text-myprimary">i</span>
								</p>
								<TextToSpeech text={chat?.AIOutput} />
							</div>

							<div className="overflow-hidden transition-all  max-sm:p-2 ">
								<div>
									<Markdown
										options={{
											overrides: {
												Code: {
													component: Code,
												},
											},
										}}
									>
										{chat?.AIOutput || ""}
									</Markdown>
									{/* <ReactMarkdown 
										components={{
											pre: ({ node, ...props }) => (
												<div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
													<pre {...props} />
												</div>
											),
											// code: ({ node, ...props }) => (
											// 	<code
											// 		className="bg-black/10s rounded-lg p-1"
											// 		{...props}
											// 	/>
											// ),
											code: Code,
										}}
										className="text-sm overflow-hidden leading-7"
									>
										{datams}
										{chat?.AIOutput || ""}
									</ReactMarkdown> */}
									{/* {chat?.AIOutput || ""} */}
								</div>
							</div>
						</div>
					</div>
				))
			)}
		</div>
	);
};

export default RecentChats;

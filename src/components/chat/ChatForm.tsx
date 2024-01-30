"use client";
import { Textarea } from "@/components/ui/textarea";
import { useChatContext } from "@/context/ChatContext";
import { Keyboard, Plus, SendHorizontal } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";

const ChatForm = () => {
	const { NewConversation, onnewConReady, NewChat, isSubmit } =
		useChatContext();
	const pathname = usePathname();
	const params = useParams();
	const [userInput, setUserInput] = useState("");
	const submitForm = () => {
		const data = {
			userInput: userInput,
			conversationId: params.chatid,
		};
		if (pathname === "/chat") {
			NewConversation(data);
		} else {
			NewChat(data);
		}
		setUserInput("");
	};

	const handleEnter = (e: any) => {
		if (e.key == "Enter" && !e.shiftKey) {
			const width = window.innerWidth;
			if (width >= 650) {
				submitForm();
			}
		}
	};
	return (
		<>
			<div
				className=" fixeds dark:bg-slate-600 bg-foreground/10 broder p-2 rounded-full md:hidden"
				onClick={onnewConReady}
			>
				<Plus />
			</div>

			<Textarea
				placeholder="Enter a prompt here"
				value={userInput}
				onKeyDown={handleEnter}
				onChange={(e) => setUserInput(e.target.value)}
				disabled={isSubmit}
				className={`resize-none  no-scrollbar min-h-[50px] rounded-full border border-slate-500 pt-4  ${
					isSubmit ? "opacity-50 cursor-not-allowed" : ""
				}`}
			></Textarea>
			<Button
				variant="ghost"
				className="!p-0"
				onClick={submitForm}
				disabled={isSubmit}
			>
				<SendHorizontal
					strokeWidth={0.5}
					className={`cursor-pointer hover:text-slate-300  ${
						isSubmit ? "opacity-50 cursor-not-allowed " : ""
					}`}
				/>
			</Button>
		</>
	);
};

export default ChatForm;

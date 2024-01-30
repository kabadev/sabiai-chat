import Image from "next/image";
import React from "react";
import { suggestedPrompt } from "./constants";
import { useChatContext } from "@/context/ChatContext";

const Welcome = () => {
	const { NewConversation } = useChatContext();

	const handlePromptClick = (userInput: string) => {
		const data = {
			userInput: userInput,
			userId: "12",
		};
		NewConversation(data);
	};
	return (
		<div>
			<Image
				src="/bardlogo.gif"
				alt=""
				width={100}
				height={100}
				className="w-9 h-9"
			/>
			<div className="mt-5 space-y-4">
				<h1 className="text-4xl font-bold">
					Hello <span className="text-myprimary">Padi</span>
				</h1>
				<p className="text-xl">
					Tell me what’s on your mind, or pick a suggestion.
				</p>
			</div>

			<div className="mt-6 grid md:grid-cols-2 md:w-[80%] mad:gap-4 gap-2">
				{suggestedPrompt.map((prompt, i) => (
					<div
						className=" bg-background/60 h-18 p-4 rounded-md cursor-pointer transition-all duration-300 hover:bg-background"
						key={i}
						onClick={() => handlePromptClick(prompt.prompt)}
					>
						<h2>{prompt.title}</h2>
						<p className="text-foreground/60 font-400 text-sm">{prompt.desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Welcome;

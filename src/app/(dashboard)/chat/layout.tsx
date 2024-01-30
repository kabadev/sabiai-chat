import ChatForm from "@/components/chat/ChatForm";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatContextProvider from "@/context/ChatContext";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ChatContextProvider>
			<div className="h-screen fixed  w-full md:flex  leading-7 text-sm font-400">
				<ChatSidebar />
				<main className="bg-accent w-[calc(100%-350px)]  mr-12 rounded-3xl mb-[100px] h-[calc(100vh-100px)]  overflow-hidden max-md:w-full  max-md:rounded-none max-md:h-[calc(100vh-70px)]">
					<div className="h-[80%] p-6 overflow-y-auto max-sm:h-[calc(80%-30px)] max-sm:px-2">
						{children}
					</div>

					<div className="md:h-[20%]  flex items-center justify-center gap-2  p-4  max-md:fixed w-full bottom-0">
						<ChatForm />
					</div>
				</main>
			</div>
		</ChatContextProvider>
	);
};

export default layout;

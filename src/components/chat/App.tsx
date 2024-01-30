"use client";
import Chats from "@/components/chat/Chats";
import Welcome from "@/components/chat/Welcome";
import { useChatContext } from "@/context/ChatContext";
const App = () => {
	const { isNewConReady } = useChatContext();

	return <div>{isNewConReady ? <Chats /> : <Welcome />}</div>;
};

export default App;

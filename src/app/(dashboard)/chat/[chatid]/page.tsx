import ChatForm from "@/components/chat/ChatForm";
import ChatSidebar from "@/components/chat/ChatSidebar";
import Chats from "@/components/chat/Chats";
import Welcome from "@/components/chat/Welcome";

import { currentUser, useUser } from "@clerk/nextjs";

const page = async () => {
	const user = await currentUser();

	return (
		<div>
			<Chats />
		</div>
	);
};

export default page;

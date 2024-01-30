interface ConversationItem {
	_id: string;
	userInput: string;
	AIOutput: string;
	conversationId: string;
	userId: string;
	__v: number;
}

export default function convertArrayToData(array: ConversationItem[]): string {
	let result = "";

	array.forEach((obj, index) => {
		result += ` Human:${obj.userInput}\nYou:${obj.AIOutput}\n`;
		if (index < array.length - 1) {
			result += "\n\n";
		}
	});

	return result;
}

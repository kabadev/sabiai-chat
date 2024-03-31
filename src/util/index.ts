interface ConversationItem {
	_id: string;
	userInput: string;
	AIOutput: string;
	conversationId: string;
	userId: string;
	__v: number;
}

export default function convertArrayToData(array: ConversationItem[]) {
	let result: any = [];

	array.forEach((obj, index) => {
		result.push({
			role: "user",
			parts: [{ text: obj.userInput }],
		});
		result.push({
			role: "model",
			parts: [{ text: obj.AIOutput }],
		});
	});

	return result;
}

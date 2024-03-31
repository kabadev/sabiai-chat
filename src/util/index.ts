interface ConversationItem {
	_id: string;
	userInput: string;
	AIOutput: string;
	conversationId: string;
	userId: string;
	__v: number;
}

export default function convertArrayToData(array:any) {
	let result:any = [];
	

	array.forEach((obj, index) => {
		result.push({
			role:"user",
			part:obj.userInput
		
		},
		{
			role:"model",
			part:obj.AIOutput
		}
		)
		// result += ` Human:${obj.userInput}\nYou:${obj.AIOutput}\n`;
		// if (index < array.length - 1) {
		// 	result += "\n\n";
		// }
	});

	return result;
}

import {
	Code,
	ImageIcon,
	MessageSquare,
	Music,
	VideoIcon,
	AudioLines,
} from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
	{
		label: "Conversation",
		icon: MessageSquare,
		href: "/chat",
		color: "text-violet-500",
		bgColor: "bg-violet-500/10",
	},
	{
		label: "Image Generation",
		icon: ImageIcon,
		color: "text-pink-700",
		bgColor: "bg-pink-700/10",
		href: "/image",
	},
	{
		label: "Text To Speech",
		icon: AudioLines,
		href: "/text-to-speech",
		color: "text-emerald-500",
		bgColor: "bg-emerald-500/10",
	},

	{
		label: "Video Generation",
		icon: VideoIcon,
		color: "text-orange-700",
		bgColor: "bg-orange-700/10",
		href: "/video",
	},
	{
		label: "Music Generation",
		icon: VideoIcon,
		color: "text-green-700",
		bgColor: "bg-green-700/10",
		href: "/music",
	},
	{
		label: "Code Generation",
		icon: Code,
		color: "text-green-700",
		bgColor: "bg-green-700/10",
		href: "/code",
	},
];

export const CodeData =
	'\n\nPython:\n```\n# This code snippet prints "Hello World" in Python\nprint("Hello World")\n```\n\nJavascript:\n```\n// This code snippet prints "Hello World" in Javascript\nconsole.log("Hello World");\n```';

export const code2 =
	"\n\nAnswer: The useEffect hook in ReactJS is used to perform side effects in functional components. It takes in two parameters: a function and an optional array of dependencies. The function passed in as the first parameter will be executed after every render, unless the dependencies in the second parameter have not changed since the previous render. This allows for efficient and controlled execution of side effects.\n\nExample:\n\n```\nimport React, { useEffect, useState } from 'react';\n\nconst ExampleComponent = () => {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    // This function will be executed after every render\n    console.log('Count has been updated');\n  }, [count]); // Only re-run the effect if count changes\n\n  const handleIncrement = () => {\n    setCount(count + 1);\n  };\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={handleIncrement}>Increment</button>\n    </div>\n  );\n};\n```\n\nIn this example, the useEffect hook is used to log a message to the console every time the count state changes. This ensures that the side effect is only executed when necessary, preventing unnecessary re-renders.";

export const code3 =
	"Answer: The useEffect hook in ReactJS is used to perform side effects in functional components. It takes in two parameters: a function and an optional array of dependencies. The function passed in as the first parameter will be executed after every render, unless the dependencies in the second parameter have not changed since the previous render. This allows for efficient and controlled execution of side effects.";

export const datams = `# Markdown Example

## Headers

### Subheaders

*Italic text*

**Bold text**

* Bullet point 1
* Bullet point 2

1. Numbered item 1
2. Numbered item 2

[Link to Google](https://www.google.com)

![Image](https://example.com/image.jpg)

> Blockquote

\`Inline code\`

\`\`\`python
# Code block
def hello_world():
    print("Hello, World!")
\`\`\`

---

| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |`;

// Represents a sound model with its name and URL
export interface SoundModel {
	name: string;
	url: string;
	audio: string;
}

// An array of predefined sound models
const SOUND_MODELS: SoundModel[] = [
	{
		name: "ESPNET - Ljspeech",
		audio: "/audio1.mp3",
		url: "https://api-inference.huggingface.co/models/espnet/kan-bayashi_ljspeech_vits",
	},
	{
		name: "Facebook - Fastspeech2",
		audio: "/audio2.mp3",
		url: "https://api-inference.huggingface.co/models/facebook/fastspeech2-en-ljspeech",
	},
	{
		name: "Speechbrain - Ljspeech",
		audio: "/audio1.mp3",
		url: "https://api-inference.huggingface.co/models/espnet/kan-bayashi_ljspeech_conformer_fastspeech2",
		// url: "https://api-inference.huggingface.co/models/speechbrain/tts-tacotron2-ljspeech",
	},
	{
		name: "Voicemod - Fastspeech2",
		audio: "/audio1.mp3",
		url: "https://api-inference.huggingface.co/models/espnet/english_male_ryanspeech_tacotron",
	},
];

// Export the array of sound models
export default SOUND_MODELS;

export const ProductData = [
	{
		title: "Product 1",
		link: "https://example.com/product1",
		thumbnail:
			"https://www.userogue.com/_next/image?url=%2Fimages%2Fhero-new.png&w=1920&q=75",
	},
	{
		title: "Product 2",
		link: "https://example.com/product2",
		thumbnail:
			"https://cursor.sh/_next/image?url=%2Flanding%2Fhero%2Fhero-secondary%403x.webp&w=1200&q=75",
	},
	{
		title: "Product 3",
		link: "https://example.com/product3",
		thumbnail: "https://www.algochurn.com/images/home/section-2.png",
	},
	{
		title: "Product 4",
		link: "https://example.com/product4",
		thumbnail: "https://example.com/thumbnail4.jpg",
	},
	{
		title: "Product 5",
		link: "https://example.com/product5",
		thumbnail: "https://example.com/thumbnail5.jpg",
	},
];

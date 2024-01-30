import React, { useState, useEffect } from "react";

const AiLoader = () => {
	const [aiLoaderText, setAiLoaderText] = useState(".");
	const DOTS_COUNT_LIMIT = 3;
	const INTERVAL_DURATION = 300;

	let intervalId: any; // Declare the intervalId outside the startAiLoader function

	const startAiLoader = () => {
		let dotCount = 0;

		intervalId = setInterval(() => {
			if (dotCount === DOTS_COUNT_LIMIT) {
				setAiLoaderText("");
				dotCount = 0;
			} else {
				setAiLoaderText((prevText) => prevText + ".");
				dotCount++;
			}
		}, INTERVAL_DURATION);
	};

	useEffect(() => {
		startAiLoader();

		return () => clearInterval(intervalId);
	}, [intervalId]);

	return <div>.{aiLoaderText}</div>;
};

export default AiLoader;

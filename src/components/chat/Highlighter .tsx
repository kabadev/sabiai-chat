import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Highlighter = ({ language, children, ...props }: any) => {
	return (
		<SyntaxHighlighter
			style={dracula}
			language={language}
			PreTag="div"
			{...props}
		>
			{children}
		</SyntaxHighlighter>
	);
};

export default Highlighter;

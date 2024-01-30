import { ClipboardCheck, Copy, Podcast } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
// import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
const Code = ({ language, children, ...props }: any) => {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCopied(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, [copied]);

	return (
		<div className="code">
			<CopyToClipboard text={children} onCopy={() => setCopied(true)}>
				<div className="flex items-center justify-end p-2">
					<button className="icon copy-icon">
						{copied ? <ClipboardCheck /> : <Copy />}
					</button>
				</div>
			</CopyToClipboard>

			<SyntaxHighlighter language={language} style={atomOneDark}>
				{children}
			</SyntaxHighlighter>
		</div>
	);
};

export default Code;

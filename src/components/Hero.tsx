"use client";
import React from "react";
import Link from "next/link";

export const Hero = () => {
	const ref = React.useRef(null);

	return (
		<div
			ref={ref}
			className=" py-10 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
		>
			<Header />
		</div>
	);
};

export const Header = () => {
	return (
		<div className="max-w-7xl flex flex-col mx-auto py-10 md:py-10 px-4 w-full  left-0 top-0">
			<h1 className="text-2xl md:text-7xl font-bold dark:text-white">
				The Ultimate <br /> <span className="text-myprimary">AI Assistant</span>
			</h1>
			<p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
				{`Elevate your digital experience with the unparalleled capabilities of
				SabiAI, The Ultimate AI Assistant. Seamlessly blending advanced
				conversational skills, extensive knowledge access, and powerful code
				generation, SabiAI is designed to be your all-encompassing virtual
				companion.`}
			</p>
			<Link
				href={"/chat"}
				className=" text-white self-start p-3 py-3 mt-5 px-6 rounded-3xl flex items-center justify-center bg-myprimary hover:bg-myprimary/50 transition-all duration-300"
			>
				Start for free
			</Link>
		</div>
	);
};

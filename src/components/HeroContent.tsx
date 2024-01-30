"use client";

import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import {
	slideInFromLeft,
	slideInFromRight,
	slideInFromTop,
} from "@/util/motion";
import { SparklesIcon } from "lucide-react";
import Link from "next/link";

const HeroContent = () => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className="flex  flex-col md:flex-row items-center justify-center px-2 md:px-20  mt-40 w-full z-[20] gap-10"
		>
			<div className="h-full max-md:order-2 w-full flex flex-col gap-5 justify-center m-auto text-start max-md:items-center">
				<motion.div
					variants={slideInFromTop}
					className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] max-md:flex"
				>
					<SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
					<h1 className="text-[#b49bff] text-[13px]">
						Sabi AI your padi tools
					</h1>
				</motion.div>

				<motion.div
					variants={slideInFromLeft(0.5)}
					className="flex flex-col gap-6 mt-6 text-3xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto max-md:text-center "
				>
					<span>
						Providing the <br />
						best
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-500">
							{" "}
							Ai exprience
						</span>
					</span>
				</motion.div>

				<motion.p
					variants={slideInFromLeft(0.8)}
					className="text-lg text-gray-400 my-5 max-w-[600px] max-md:text-center "
				>
					I&apos;m a Full Stack Software Engineer with experience in Website,
					Mobile, and Software development. Check out my projects and skills.
				</motion.p>
				<Link
					href="/login"
					className="py-4 button-primarys bg-gradient-to-r from-green-500 to-blue-500/100 text-center text-white cursor-pointer rounded-lg max-w-[200px] max-md:w-full"
				>
					Start for free
				</Link>
			</div>

			<motion.div
				variants={slideInFromRight(0.8)}
				className="w-full h-full flex justify-center items-center max-md:order-1"
			>
				<Image
					src="/ilustrator.png"
					className="w-full"
					alt="work icons"
					height={650}
					width={650}
				/>
			</motion.div>
		</motion.div>
	);
};

export default HeroContent;

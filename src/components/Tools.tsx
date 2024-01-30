"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/util/motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Tools = () => {
	return (
		<>
			<section
				className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hiddens  py-20 mt-42 z-20"
				style={{ transform: "scale(0.9" }}
			>
				<div className="w-full h-[500px] absolute top-[-200] opacity-20 rounded-full overflow-hidden -z-10">
					<video
						className="w-full h-full "
						preload="false"
						playsInline
						loop
						muted
						autoPlay
						src="/cards-video.webm"
					/>
				</div>
				<motion.div
					variants={slideInFromLeft(0.8)}
					className="flex flex-col gap-6 mt-6  text-white md:w-[70%] w-auto h-auto text-center "
				>
					<div className="text-3xl md:text-6xl font-bold">
						<span>
							Unleash the potential of{" "}
							<span className="text-myprimary">AI</span> with{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500/100">
								our suite of power tools
							</span>
						</span>
					</div>

					<p>
						Designed to turn your imagination into reality across diverse
						creative domains.
					</p>
				</motion.div>
			</section>
			<section
				className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hiddens  mt-20 z-50"
				style={{ transform: "scale(0.9" }}
			>
				<div className="flex gap-4 max-md:flex-col items-center z-50 ">
					<motion.div
						variants={slideInFromLeft(0.8)}
						className="w-1/2 max-md:w-full relative"
					>
						<div className="w-full h-[500px] absolute top-[-200px]  opacity-20  -z-10">
							<video
								className="w-full h-full "
								preload="false"
								playsInline
								loop
								muted
								autoPlay
								src="/cards-video.webm"
							/>
						</div>
						<div className=" space-y-6 backdrop-blur-mddd bg-slate-900/20dd p-4 rounded-xl">
							<div className="text-3xl md:text-6xl font-bold">
								<span className="text-myprimary">Conversation</span>
							</div>

							<p>
								A versatile language model designed for natural language
								processing tasks, such as conversational agents, content
								generation, and code assistance, providing human-like responses
								to diverse applications.
							</p>
							<Button className="px-16 py-7 text-white bg-myprimary transition-all duration-300 hover:bg-myprimary/70">
								<Link href="#">Start chat</Link>
							</Button>
						</div>
					</motion.div>

					<motion.div
						variants={slideInFromRight(0.8)}
						className="w-1/2 max-md:full"
					>
						<Image
							src="/chat1.png"
							className="w-full rounded-xl"
							alt=""
							width={1000}
							height={1000}
						/>
					</motion.div>
				</div>
			</section>
			<section
				className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hiddens  mt-20 z-50"
				style={{ transform: "scale(0.9" }}
			>
				<div className="flex gap-4 max-md:flex-col items-center z-50 ">
					<motion.div
						variants={slideInFromRight(0.8)}
						className="w-1/2 max-md:full"
					>
						<Image
							src="/robot.png"
							className="w-full rounded-xl"
							alt=""
							width={1000}
							height={1000}
						/>
					</motion.div>
					<motion.div
						variants={slideInFromLeft(0.8)}
						className="w-1/2 max-md:w-full relative"
					>
						<div className="w-full h-[500px] absolute top-[-200px]  opacity-20  -z-10">
							<video
								className="w-full h-full "
								preload="false"
								playsInline
								loop
								muted
								autoPlay
								src="/cards-video.webm"
							/>
						</div>
						<div className=" space-y-6 backdrop-blur-mddd bg-slate-900/20dd p-4 rounded-xl">
							<div className="text-3xl md:text-6xl font-bold">
								<span className="text-myprimary">Conversation</span>
							</div>

							<p>
								A versatile language model designed for natural language
								processing tasks, such as conversational agents, content
								generation, and code assistance, providing human-like responses
								to diverse applications.
							</p>
							<Button className="px-16 py-7 text-white bg-myprimary transition-all duration-300 hover:bg-myprimary/70">
								<Link href="#">Start chat</Link>
							</Button>
						</div>
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default Tools;

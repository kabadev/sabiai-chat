import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Hero } from "@/components/Hero";
import { ProductData } from "@/constants";
import { Screens } from "@/components/Screens";
import { ContainerScroll } from "./ContainerScroll";

export default function Home() {
	return (
		<div className=" text-slate-300 px-16 max-md:px-4 max-sm:px-2 py-6 bg-top  bg-[url('/bg.svg')] bg-no-repeat h-full overflow-x-hidden ">
			<div className="w-full h-[65px] flex items-center justify-between">
				<Image
					src="/sabilogo4.png"
					height={1000}
					width={1000}
					alt="logo"
					className="w-24  "
				/>

				<Link
					href={"/chat"}
					className="text-white max-md:hidden p-3 py-3 px-6 rounded-3xl flex items-center justify-center bg-myprimary hover:bg-myprimary/50 transition-all duration-300 max-md:p-2 max-md:px-4"
				>
					Start for free
				</Link>
			</div>
			<Hero />
			<div className="flex flex-col overflow-hidden">
				<ContainerScroll
					titleComponent={
						<>
							<h1 className="text-4xl font-semibold text-white">
								Unleash the power of <br />
								<span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
									<span className="text-myprimary">Sabi AI</span> Your adi
								</span>
							</h1>
						</>
					}
				/>
			</div>
			<Screens />
			<section className="mt-32 max-md:mt-24">
				{/* <h2 className="text-center text-6xl font-bold md:w-1/2">
					Many tools to express your creativity
				</h2> */}
				<div className="flex max-md:flex-col gap-4 mb-24">
					<FeatureCard>
						<h2 className="text-xl font-bold text-myprimary">
							Versatility Unleashed
						</h2>
						<p>
							SabiAI is your all-encompassing conversational companion. From
							information retrieval to brainstorming, SabiAI adapts to your
							needs, ensuring every conversation is uniquely tailored to you.
						</p>
					</FeatureCard>
					<FeatureCard>
						<h2 className="text-xl font-bold text-myprimary">
							Infinite Knowledge at Your Fingertips
						</h2>
						<p>
							Dive into a sea of knowledge with SabiAI vast understanding of
							various subjects. Access accurate and up-to-date information
							effortlessly, making SabiAI your go-to source for insights and
							answers.
						</p>
					</FeatureCard>
					<FeatureCard>
						<h2 className="text-xl font-bold text-myprimary">
							Code Generation Capabilities
						</h2>
						<p>
							Empower your projects with SabiAI code generation prowess. Whether
							you need quick snippets or assistance in complex programming
							tasks, SabiAI streamlines the coding process, making it a valuable
							ally for developers and tech enthusiasts alike.
						</p>
					</FeatureCard>
				</div>
			</section>
			<section className="my-24 mt-34">
				<h2 className="text-6xl font-bold text-center text-white max-md:text-4xl">
					Use Sabi AI today
				</h2>
				<div className="md:px-32 mt-7 ">
					<Image
						src="/screenshots/screen6.png"
						height={1000}
						width={1000}
						alt="logo"
						className="w-full h-full shadow-2xl shadow-blue-300/25 rounded-lg  "
					/>
				</div>
			</section>

			<section className=" flex items-center my-10 mt-34 max-md:flex-col">
				<div className="flex flex-col items-start max-md:items-center gap-6">
					<h2 className="text-3xl font-bold leading-[1.3] text-white max-md:text-center">
						Create your next artwork, with the power of Sabi Ai
					</h2>
					<Link
						href={"/chat"}
						className="text-white p-3 py-3 px-6 max-md:p-2 max-md:px-4 rounded-3xl flex items-center justify-center bg-myprimary hover:bg-myprimary/50 transition-all duration-300"
					>
						Start for free
					</Link>
				</div>
				<div className="md:px-32 mt-7 ">
					<Image
						src="/screenshots/screen5.png"
						height={1000}
						width={1000}
						alt="logo"
						className="w-full h-full border rounded-lg shadow-2xl shadow-blue-300/25 "
					/>
				</div>
			</section>
		</div>
	);
}

const FeatureCard = ({ children }: { children: ReactNode }) => {
	return (
		<div className="space-y-3 bg-slate-700 p-6 py-10 rounded-sm shadow-2xl shadow-blue-300/25">
			{children}
		</div>
	);
};

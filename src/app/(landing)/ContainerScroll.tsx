"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
export const ContainerScroll = ({
	titleComponent,
}: {
	titleComponent: string | React.ReactNode;
}) => {
	const containerRef = useRef<any>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
	});
	const [isMobile, setIsMobile] = React.useState(false);

	React.useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => {
			window.removeEventListener("resize", checkMobile);
		};
	}, []);

	const scaleDimensions = () => {
		return isMobile ? [0.7, 0.9] : [1.05, 1];
	};

	const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
	const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
	const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

	return (
		<div
			className="h-[50rem] flex items-center justify-center relative p-2 md:p-20"
			ref={containerRef}
		>
			<div
				className="py-10 w-full relative"
				style={{
					perspective: "1000px",
				}}
			>
				<Header translate={translate} titleComponent={titleComponent} />
				<Card rotate={rotate} scale={scale} />
			</div>
		</div>
	);
};

export const Header = ({ translate, titleComponent }: any) => {
	return (
		<motion.div
			style={{
				translateY: translate,
			}}
			className="div max-w-5xl mx-auto text-center"
		>
			{titleComponent}
		</motion.div>
	);
};

export const Card = ({ rotate, scale }: { rotate: any; scale: any }) => {
	return (
		<motion.div
			style={{
				rotateX: rotate, // rotate in X-axis
				scale,
				boxShadow:
					"0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
			}}
			className="max-w-5xl -mt-4 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
		>
			<Image
				src="/screenshots/screen5.png"
				height={1000}
				width={1000}
				alt="logo"
				className="w-full h-full border rounded-lg shadow-2xl shadow-blue-300/25 max-md:hidden "
			/>
			<Image
				src="/screenshots/screen7.png"
				height={1000}
				width={1000}
				alt="logo"
				className="w-full h-full border rounded-lg shadow-2xl shadow-blue-300/25 md:hidden "
			/>
			{/* <div className="bg-gray-100 h-full w-full rounded-2xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden p-4">
				
			</div> */}
		</motion.div>
	);
};

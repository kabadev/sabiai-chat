"use client";
import React from "react";
import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	MotionValue,
} from "framer-motion";
import Image from "next/image";

export const Screens = () => {
	const products = [
		"/screenshots/screen4.png",
		"/screenshots/screen6.png",
		"/screenshots/screen5.png",
		"/screenshots/screen1.png",
		"/screenshots/screen2.png",
		"/screenshots/screen3.png",
		"/screenshots/screen7.png",
	];
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX = useSpring(
		useTransform(scrollYProgress, [0, 1], [-100, 1000]),
		springConfig
	);

	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [10, 0]),
		springConfig
	);
	const opacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
		springConfig
	);
	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [20, 0]),
		springConfig
	);
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-10, 200]),
		springConfig
	);
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [100, -1000]),
		springConfig
	);
	return (
		<div
			ref={ref}
			className=" -mt-32 pt-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1v000px] [transform-style:preserve-3d]"
		>
			<motion.div
				style={{
					rotateX,
					rotateZ,
					translateY,
					opacity,
				}}
				className=""
			>
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20 ">
					{products?.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product}
						/>
					))}
				</motion.div>
				<motion.div className="flex flex-row  mb-20 space-x-20 max-md:hidden ">
					{products?.slice(2, 7).map((product) => (
						<ProductCardPhone
							product={product}
							translate={translateXReverse}
							key={product}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export const ProductCard = ({
	product,
	translate,
}: {
	product: any;
	translate: MotionValue<number>;
}) => {
	return (
		<motion.div
			style={{
				x: translate,
			}}
			whileHover={{
				y: -20,
			}}
			key={product}
			className="group/product h-[500px] w-[700px] relative flex-shrink-0"
		>
			<div className="block group-hover/product:shadow-2xl w-full ">
				<Image
					src={product}
					height={600}
					width={600}
					className="object-contain object-left-top absolute h-full w-full inset-0"
					alt="Image"
				/>
			</div>
		</motion.div>
	);
};
export const ProductCardPhone = ({
	product,
	translate,
}: {
	product: any;
	translate: MotionValue<number>;
}) => {
	return (
		<motion.div
			style={{
				x: translate,
			}}
			whileHover={{
				y: -20,
			}}
			key={product}
			className="group/product h-[700px] w-[200px]  md:w-full relative "
		>
			<div className="block group-hover/product:shadow-2xl w-full ">
				<Image
					src={product}
					height={600}
					width={600}
					className="object-contain object-left-top absolute h-full w-full inset-0"
					alt="Image"
				/>
			</div>
		</motion.div>
	);
};

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Notfound = () => {
	return (
		<div className="flex justify-center items-center">
			<div>
				<Image
					src="/404.svg"
					alt=""
					className="w-[90%]"
					width={1000}
					height={1000}
				/>
				<div className="w-full flex items-center justify-center flex-col gap-4">
					<h2 className="md:text-2xl font-bold text-center text-xl">
						This page not found
					</h2>
					<Button className="rounded-sm text-white  bg-myprimary hover:bg-myprimary/60 transition-all duration-300 px-16 py-6">
						<Link href="/">Return Home</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Notfound;

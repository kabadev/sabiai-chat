import {
	GitHubLogoIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Github, GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="  relative  w-full bg-slate-800 text-white  h-full  overflow-x-hidden ">
			{children}
			<div className="md:px-24 py-6 p-2  flex items-center justify-between max-lg:flex-col gap-3">
				<Image
					src="/sabilogo4.png"
					height={1000}
					width={1000}
					alt="logo"
					className="w-24 "
				/>
				<h3>
					Made with ❤️love by{" "}
					<Link href="https://github.com/kabadev" target="_blank">
						Lans Kaba
					</Link>
				</h3>
				<div className="flex items-center gap-3">
					<Link
						href="https://github.com/kabadev"
						target="_blank"
						className="p-4 bg-slate-700 rounded-sm"
					>
						<GitHubLogoIcon scale={30} />
					</Link>
					<Link
						href="https://www.linkedin.com/in/lans-kaba/"
						target="_blank"
						className="p-4 bg-slate-700 rounded-sm"
					>
						<LinkedInLogoIcon />
					</Link>
					<Link
						href="https://www.instagram.com/lanskabamedia"
						target="_blank"
						className="p-4 bg-slate-700 rounded-sm"
					>
						<InstagramLogoIcon />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default layout;

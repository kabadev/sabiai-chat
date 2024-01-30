"use client";
import React, { useEffect, useRef, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { AlignJustify, Plus } from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

const Navbar = () => {
	const { theme, setTheme } = useTheme();
	const { isSidebarOpen, openSidebar } = useAppContext();

	const { user } = useUser();
	const [mounted, setMounted] = useState(false);
	const [thempath, setThempath] = useState("/sabilogo4.png");
	const [themes, setThemes] = useState(theme);
	const mainHtmlRef = useRef<any>(null);
	useEffect(() => {
		if (mainHtmlRef.current) {
			setThemes(mainHtmlRef.current.className);
		}
	}, [mainHtmlRef, setThemes]);

	useEffect(() => {
		if (theme === "dark") {
			setThempath("/sabilogo4.png");
		} else {
			setThempath("/sabilogo2.png");
		}
	}, [theme]);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div
			ref={mainHtmlRef}
			className={cn(
				"flex items-center justify-between px-[10px] md:px-[50px] h-[70px] z-20",
				theme ? theme : ""
			)}
		>
			<div className="flex gap-2 items-center ">
				<AlignJustify
					strokeWidth={0.5}
					className="md:hidden text-foreground"
					onClick={openSidebar}
				/>

				<Link href="/">
					<Image
						src={thempath}
						alt=""
						height={100}
						width={100}
						priority={true}
						className="p-1 max-md:w-[4rem]"
					/>
				</Link>
			</div>
			<div className=" flex items-center gap-3">
				<ThemeSwitcher />
				<div className="">
					{user ? (
						<UserButton afterSignOutUrl="/" />
					) : (
						<Button>Get start</Button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;

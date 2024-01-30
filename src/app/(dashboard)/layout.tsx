import Navbar from "@/components/Navbar";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="">
			<Navbar />
			{children}
		</div>
	);
}

import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/providers/ThemesProvider";
import Navbar from "@/components/Navbar";
import { Inter, Poppins } from "next/font/google";
import { AppProvider } from "@/context/AppContext";
const poppins = Poppins({
	weight: "400",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider afterSignInUrl="/chat" afterSignUpUrl="/chat">
			<html lang="en" suppressHydrationWarning>
				<body className={poppins.className}>
					<AppProvider>
						<ThemeProvider
							attribute="class"
							defaultTheme="system"
							enableSystem
							disableTransitionOnChange
						>
							{children}
						</ThemeProvider>
					</AppProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}

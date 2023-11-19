import { ReactNode } from "react";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import ThemeProvider from "./_providers/ThemeProvider";

import "./_styles/global.css";

const openSans = Open_Sans({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
	title: "MOTOBRO",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/images/favicons/favicon-light.ico",
				href: "/images/favicons/favicon-light.ico",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/images/favicons/favicon-dark.ico",
				href: "/images/favicons/favicon-dark.ico",
			},
		],
	},
};

export default function GlobalLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ru">
			<body style={openSans.style} className="min-h-screen w-screen bg-light dark:bg-dark">
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}

"use client";

import { useTheme } from "next-themes";

export default function useToggleTheme() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return { theme, toggleTheme };
}

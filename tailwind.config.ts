import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				dark: "#181818",
				secondaryDark: "#1F1F1F",
				gray: "#343434",
				light: "#E3E3E3",
				success: "#28D864",
			},
			boxShadow: {
				darken: "0 0 8px 1px rgba(0, 0, 0, 0.1)",
			},
		},
	},
	plugins: [],
};
export default config;

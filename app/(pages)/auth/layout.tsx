"use client";

import { ReactNode } from "react";
import Image from "next/image";

import useToggleTheme from "@/app/_hooks/useToggleTheme";

export default function AuthLayout({ children }: { children: ReactNode }) {
	const { toggleTheme } = useToggleTheme();

	return (
		<section className="flex justify-between items-center min-h-screen relative">
			{/* <div className="relative max-h-screen self-end flex items-end justify-start">
				<Image
                    className="block max-h-screen w-full"
					src="/images/rider-on-auth-page.png"
					width={992}
					height={978}
					alt="Мотоциклист в шлеме"
				/>
				<div className="absolute h-full bg-white/5 blur-[250px] w-full top-0 left-0 -z-10 rounded-full" />
			</div> */}
			<div className="max-w-[380px] w-full">{children}</div>
			<Image
				className="absolute top-[30px] right-[30px] cursor-pointer"
				src="/icons/sun.svg"
				width={32}
				height={32}
				alt="Смена темы"
				onClick={toggleTheme}
			/>
		</section>
	);
}

"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import Input from "@/app/_components/Input";
import Button from "@/app/_components/Button";
import Checkbox from "@/app/_components/Checkbox";

export default function AuthPage() {
	const [tab, setTab] = useState<string>("login");

	return (
		<form className="relative overflow-hidden flex flex-col min-h-[520px] rounded-lg p-[25px] pb-[30px] bg-secondaryDark/80 shadow-darken">
			{/* Static part */}
			<Image
				className={"absolute left-0 right-0 -bottom-1.5 -z-10"}
				width={1600}
				height={831}
				src={"/images/city.png"}
				alt={"Городские дома"}
			/>
			<div className={"h-[30px]"}>
				<button
					type={"button"}
					className={clsx("text-sm w-1/2 rounded-l-full h-full", [
						tab === "login"
							? "cursor-default font-semibold text-white bg-success"
							: "hover:border-white/70 hover:text-white/70 font-normal text-white/50 border border-white/50 border-r-0",
					])}
					onClick={() => setTab("login")}
				>
					Вход
				</button>
				<button
					type={"button"}
					className={clsx(
						"text-sm w-1/2 rounded-r-full h-full",
						tab === "register"
							? "cursor-default font-semibold text-white bg-success"
							: "hover:border-white/70 hover:text-white/70 font-normal text-white/50 border border-white/50 border-l-0",
					)}
					onClick={() => setTab("register")}
				>
					Регистрация
				</button>
			</div>
			<Image
				className={"my-6 mx-auto block"}
				src={"/images/logo.svg"}
				alt={"Логотип"}
				width={248}
				height={49}
			/>

			{/* Dynamic part */}
			<div className={"flex flex-col gap-[15px] grow"}>
				{tab === "login" && (
					<>
						<Input label={"Номер телефона"} icon={"phone"} isPhone />
						<Input label={"Пароль"} type={"password"} icon={"key"} />
						<div className={"text-center -mt-1"}>
							<Button text={"Восстановление пароля"} isText />
						</div>
						<div className={"mt-auto"}>
							<Button text={"Войти в аккаунт"} isOutline />
						</div>
					</>
				)}
				{tab === "register" && (
					<>
						<Input icon={"tag"} label={"Никнейм"} isRequired />
						<Input
							icon={"phone"}
							label={"Номер телефона"}
							isRequired
							isPhone
						/>
						<Input
							icon={"key"}
							label={"Пароль"}
							type={"password"}
							isRequired
						/>
						<div className={"mx-auto"}>
							<Checkbox>
								я принимаю все <Button text={"правила портала"} isText/>
							</Checkbox>
						</div>
						<div className={"mt-auto"}>
							<Button text={"Зарегистрироваться"} isOutline />
						</div>
					</>
				)}
			</div>
		</form>
	);
}

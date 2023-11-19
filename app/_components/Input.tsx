import Image from "next/image";
import clsx from "clsx";
import ReactInputMask from "react-input-mask";
import { useRef } from "react";

interface IInput {
	type?: string;
	label?: string;
	isPhone?: boolean;
	isRequired?: boolean;
	icon?: string;
	value?: string;
	onChange?: (value: string) => void;
}

export default function Input({
	type = "text",
	label,
	icon,
	isPhone,
	isRequired,
	value,
	onChange,
}: IInput) {
	const inputWrapperRef = useRef<HTMLDivElement>(null);

	return (
		<div className={"inline-block"}>
			{label && (
				<label className={"mb-[5px] block ml-4 text-xs text-gray font-bold"}>
					{label}{" "}
					{isRequired && (
						<span
							style={{
								color: "#FF0000",
							}}
						>
							*
						</span>
					)}
				</label>
			)}
			<div
				ref={inputWrapperRef}
				className={clsx(
					"px-3 h-[42px] w-full rounded-full overflow-hidden border border-gray bg-dark/50",
					{
						"flex items-center gap-3": icon,
					},
				)}
			>
				{icon && (
					<Image
						width={24}
						height={24}
						src={`/icons/${icon}.svg`}
						alt={"Иконка поля ввода"}
					/>
				)}
				{isPhone ? (
					<ReactInputMask
						onFocus={() => {
							inputWrapperRef.current?.classList.remove("border-gray");
							inputWrapperRef.current?.classList.add("border-white/20");
						}}
						onBlur={() => {
							inputWrapperRef.current?.classList.remove("border-white/20");
							inputWrapperRef.current?.classList.add("border-gray");
						}}
						mask="+7 (999) 999-99-99"
						maskChar={null}
						value={value}
						onChange={(e) => onChange?.(e.target.value)}
					/>
				) : (
					<input
						onFocus={() => {
							inputWrapperRef.current?.classList.remove("border-gray");
							inputWrapperRef.current?.classList.add("border-white/20");
						}}
						onBlur={() => {
							inputWrapperRef.current?.classList.remove("border-white/20");
							inputWrapperRef.current?.classList.add("border-gray");
						}}
						className={"w-full h-full"}
						value={value}
						onChange={(e) => onChange?.(e.target.value)}
						type={type}
					/>
				)}
			</div>
		</div>
	);
}

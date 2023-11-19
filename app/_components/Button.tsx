import clsx from "clsx";

interface IButton {
	text: string;
	isText?: boolean;
	isOutline?: boolean;
	isFill?: boolean;
	onClick?: () => void;
}

export default function Button({ text, onClick, isText, isOutline, isFill }: IButton) {
	return (
		<div
			className={clsx({
				"inline-block hover:opacity-80 transition-opacity": isText,
				"hover:bg-white hover:text-secondaryDark/80 transition-colors h-[46px] rounded-full border-[2px] border-white flex-middle bg-dark/50 backdrop-blur-[2px]": isOutline
			})}
		>
			<button
				onClick={onClick}
				type={"button"}
				className={clsx({
					"text-white/50 text-[13px]": isText,
					"uppercase font-bold w-full h-full": isOutline,
				})}
			>
				{text}
			</button>
			{isText && <div className={"w-full h-[1px] bg-white/50 mt-[-1px]"} />}
		</div>
	);
}

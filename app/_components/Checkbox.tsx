import React, { ReactNode, useState } from "react";
import clsx from "clsx";
import { animated, useSpring } from "@react-spring/web";

interface ICheckbox {
	children: ReactNode;
}

export default function Checkbox({ children }: ICheckbox) {
	const [checked, setChecked] = useState(false);

	const styles = useSpring({
		scale: checked ? 1 : 0,
		config: {
			duration: 40
		}
	});

	return (
		<div className={"flex items-center gap-2"}>
			<div
				onClick={() => setChecked(!checked)}
				className={clsx(
					"transition-colors flex-middle w-[18px] h-[18px] border-[2px] rounded-sm cursor-pointer hover:border-white/50",
					[checked ? "border-white/50" : "border-gray"],
				)}
			>
				<animated.div
					className={"w-[68%] h-[68%] bg-white/50 rounded-[1px]"}
					style={styles}
				/>
			</div>
			<div className={"text-[13px] text-white/50"}>{children}</div>
		</div>
	);
}

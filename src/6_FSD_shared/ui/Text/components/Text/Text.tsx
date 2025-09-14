import type { appColorType, fontSizeType, fontWeightType } from "@customTypes/style.type"
import { colorMapper } from "@helpers/colorMapper/colorMapper.helper"
import { fontSizeMapper, fontWeightMapper } from "@helpers/fontMapper/fontMapper.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import classNames from "classnames"
import type { PropsWithChildren } from "react"
import styles from "./Text.module.scss"

type textType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"

type alignType = "left" | "center" | "right"

type TextPropsType = {
	className?: string
	align?: alignType
	TextType?: textType
	fontSize?: fontSizeType
	fontWeight?: fontWeightType
	color?: appColorType
	widthMax?: boolean
	textTransform?: "capitalize" | "uppercase"
	texDecoration?: "line-through"
	onClick?: () => void
} & PropsWithChildren

export const Text = TypedMemo((props: TextPropsType) => {
	const {
		className,
		children,
		align = "left",
		fontSize = "m",
		fontWeight = "medium",
		color = "gray",
		TextType = "p",
		widthMax = false,
		textTransform = "normal",
		onClick,
		texDecoration = "normal"
	} = props

	return (
		<TextType
			className={classNames(
				styles[align],
				styles[textTransform],
				styles[texDecoration],
				fontSizeMapper(fontSize),
				fontWeightMapper(fontWeight),
				colorMapper(color),
				{ [styles.widthMax]: widthMax },
				className
			)}
			onClick={onClick}
		>
			{children}
		</TextType>
	)
})

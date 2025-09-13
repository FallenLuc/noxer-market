import { logoSrc } from "@assets/index"
import { Navigation } from "@features/Navigation"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import classNames from "classnames"
import styles from "./Footer.module.scss"

type FooterProps = {
	className?: string
}

export const Footer = TypedMemo((props: FooterProps) => {
	const { className } = props

	return (
		<VStack
			className={classNames(className)}
			TagType={"footer"}
			gap={"S"}
			align={"center"}
		>
			<img
				className={styles.icon}
				src={logoSrc}
				alt={"logo"}
			/>
			<Navigation />
		</VStack>
	)
})

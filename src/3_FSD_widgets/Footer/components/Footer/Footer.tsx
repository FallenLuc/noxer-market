import { logoSrc } from "@assets/index"
import { Navigation } from "@features/Navigation"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import classNames from "classnames"
import styles from "./Footer.module.scss"

type FooterProps = {
	className?: string
}

export const Footer = TypedMemo((props: FooterProps) => {
	const { className } = props

	return (
		<VStack
			className={classNames(styles.footer, className)}
			TagType={"footer"}
			gap={"S"}
			align={"center"}
		>
			<Text
				fontSize={"xs"}
				color={"gray"}
				fontWeight={"medium"}
			>
				Разработано на платформе Noxer
			</Text>
			<img
				className={styles.icon}
				src={logoSrc}
				alt={"logo"}
			/>
			<Navigation />
		</VStack>
	)
})

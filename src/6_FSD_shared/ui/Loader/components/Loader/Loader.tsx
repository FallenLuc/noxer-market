import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Spin } from "antd"
import classNames from "classnames"
import { VStack } from "../../../Stack"
import styles from "./Loader.module.scss"

type LoaderProps = {
	className?: string
}

export const Loader = TypedMemo((props: LoaderProps) => {
	const { className } = props

	return (
		<VStack
			className={classNames(styles.Loader, className)}
			align={"center"}
			justify={"center"}
		>
			<Spin size="large" />
		</VStack>
	)
})

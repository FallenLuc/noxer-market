import { TypedMemo } from "@sharedProviders/TypedMemo"
import classNames from "classnames"
import type { PropsWithChildren, ReactNode } from "react"
import { VStack } from "../../../Stack"
import styles from "./Page.module.scss"

type PageProps = {
	className?: string
	footer?: ReactNode
} & PropsWithChildren

export const Page = TypedMemo((props: PageProps) => {
	const { className, footer, children } = props

	return (
		<VStack
			className={classNames(styles.Page, className)}
			justify={"spaceBetween"}
		>
			{children}
			{footer}
		</VStack>
	)
})

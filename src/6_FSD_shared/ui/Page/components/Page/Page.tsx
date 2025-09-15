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
		<div>
			<div className={styles.topPadding}></div>
			<VStack
				className={classNames(styles.Page, className)}
				justify={"spaceBetween"}
				gap={"S"}
			>
				{children}
				{footer}
			</VStack>
			<div className={styles.bottomPadding}></div>
		</div>
	)
})

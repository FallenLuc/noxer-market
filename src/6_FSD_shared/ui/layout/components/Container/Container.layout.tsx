import { TypedMemo } from "@sharedProviders/TypedMemo"
import classNames from "classnames"
import type { PropsWithChildren } from "react"
import styles from "./ContainerLayout.module.scss"

type ContainerLayoutProps = {
	className?: string
} & PropsWithChildren
export const ContainerLayout = TypedMemo((props: ContainerLayoutProps) => {
	const { className, children } = props

	return <div className={classNames(styles.ContainerLayout, className)}>{children}</div>
})

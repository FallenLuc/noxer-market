import { TypedMemo } from "@sharedProviders/TypedMemo"
import classNames from "classnames"
import styles from "./Category.module.scss"

type CategoryProps = {
	className?: string
}

export const Category = TypedMemo((props: CategoryProps) => {
	const { className } = props

	return <div className={classNames(styles.Category, className)}></div>
})

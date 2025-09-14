import { getRouteCatalog } from "@config/router"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { AppImage } from "@ui/AppImage"
import { Skeleton } from "@ui/Skeleton"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import classNames from "classnames"
import { useMemo } from "react"
import { Link } from "react-router"
import type { categoryDataType } from "../../types/categotyData.type"
import styles from "./CategoryCardFull.module.scss"

type CategoryCardFullProps = {
	className?: string
	category: categoryDataType
}

export const CategoryCardFull = TypedMemo((props: CategoryCardFullProps) => {
	const { className, category } = props

	const fallback = useMemo(() => <Skeleton />, [])

	return (
		<VStack
			className={classNames(styles.CategoryCardFull, className)}
			gap={"XS"}
			align={"center"}
		>
			<Link
				to={getRouteCatalog()}
				className={styles.imageWrapper}
			>
				<AppImage
					className={styles.image}
					src={category.Category_Image}
					alt={category.Category_Name}
					fallback={fallback}
					errorFallback={fallback}
				/>
			</Link>

			<Text
				color={"dark"}
				className={styles.text}
				fontWeight={"medium-fat"}
			>
				{category.Category_Name}
			</Text>
		</VStack>
	)
})

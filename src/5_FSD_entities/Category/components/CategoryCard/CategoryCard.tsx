import { TypedMemo } from "@sharedProviders/TypedMemo"
import classNames from "classnames"
import type { categoryDataType } from "../../types/categotyData.type"
import { CategoryCardFull } from "../CategoryCardFull/CategoryCardFull"

type CategoryCardProps = {
	className?: string
	mode: "full" | "compact"
	category: categoryDataType
}

export const CategoryCard = TypedMemo((props: CategoryCardProps) => {
	const { className, category } = props

	return (
		<CategoryCardFull
			category={category}
			className={classNames(className)}
		/>
	)
})

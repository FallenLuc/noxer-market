import { TypedMemo } from "@sharedProviders/TypedMemo"
import classNames from "classnames"
import { useMemo } from "react"
import Slider, { type Settings } from "react-slick"
import type { categoryDataType } from "../../types/categotyData.type"
import { CategoryCardFull } from "../CategoryCardFull/CategoryCardFull"
import styles from "./CategorySliderList.module.scss"

type CategorySliderListProps = {
	className?: string
	mode: "full" | "compact"
	categories?: categoryDataType[]
}

export const CategorySliderList = TypedMemo((props: CategorySliderListProps) => {
	const { className, categories } = props

	if (!categories) return null

	const settings: Settings = useMemo(
		() => ({
			dots: false,
			infinite: false,
			speed: 500,
			slidesToShow: 5,
			arrows: false,
			draggable: true,
			lazyLoad: "ondemand",
			swipeToSlide: true,
			slidesToScroll: 1
		}),
		[]
	)

	return (
		<section className={classNames(styles.CategorySliderList, className)}>
			<Slider
				{...settings}
				className={classNames(styles.slider)}
			>
				{categories.map(cat => (
					<CategoryCardFull
						category={cat}
						key={cat.Category_ID}
					/>
				))}
			</Slider>
		</section>
	)
})

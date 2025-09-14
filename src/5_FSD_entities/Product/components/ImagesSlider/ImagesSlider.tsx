import { TypedMemo } from "@sharedProviders/TypedMemo"
import { AppImage } from "@ui/AppImage"
import { Skeleton } from "@ui/Skeleton"
import { useMemo } from "react"
import Slider, { type Settings } from "react-slick"
import type { productDataType } from "../../types/productData.type"
import styles from "./ImagesSlider.module.scss"

type ImagesSliderProps = {
	product: productDataType
}

export const ImagesSlider = TypedMemo((props: ImagesSliderProps) => {
	const { product } = props

	const images = useMemo(
		() =>
			product.images.toSorted((a, b) => {
				if (a.MainImage === true && b.MainImage !== true) return -1
				if (b.MainImage === true && a.MainImage !== true) return 1
				return 0
			}),
		//eslint-disable-next-line
		[product.Product_ID]
	)

	const settings: Settings = useMemo(
		() => ({
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			arrows: false,
			draggable: true,
			lazyLoad: "progressive",
			swipeToSlide: true,
			slidesToScroll: 1
		}),
		[]
	)

	const fallback = useMemo(() => <Skeleton />, [])

	return (
		<Slider
			className={styles.withMax}
			{...settings}
		>
			{images.map(image => (
				<div
					key={image.Image_ID}
					className={styles.imageWrapper}
				>
					<AppImage
						className={styles.image}
						fallback={fallback}
						errorFallback={fallback}
						src={image?.Image_URL ?? ""}
						alt={product.Product_Name}
					/>
				</div>
			))}
		</Slider>
	)
})

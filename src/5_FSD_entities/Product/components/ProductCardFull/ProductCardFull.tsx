import { getRouteProduct } from "@config/router"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { AppImage } from "@ui/AppImage"
import { Skeleton } from "@ui/Skeleton"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import classNames from "classnames"
import { useMemo } from "react"
import { Link } from "react-router"
import type { Settings } from "react-slick"
import Slider from "react-slick"
import type { productDataType } from "../../types/productData.type"
import { PriceLine } from "../PriceLine/PriceLine"
import styles from "./ProductCardFull.module.scss"

type ProductCardFullProps = {
	className?: string
	product: productDataType
}

export const ProductCardFull = TypedMemo((props: ProductCardFullProps) => {
	const { className, product } = props

	const images = useMemo(
		() =>
			product.images.sort((a, b) => {
				if (a.MainImage === true && b.MainImage !== true) return -1
				if (b.MainImage === true && a.MainImage !== true) return 1
				return 0
			}),
		//eslint-disable-next-line
		[product.Product_ID]
	)

	const fallback = useMemo(() => <Skeleton />, [])

	const settings: Settings = useMemo(
		() => ({
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			swipeToSlide: true,
			draggable: true,
			lazyLoad: "progressive"
		}),
		[]
	)

	return (
		<VStack
			className={classNames(styles.ProductCardFull, className)}
			gap={"XS"}
		>
			<Slider {...settings}>
				{images.map(image => (
					<div
						key={image.Image_ID}
						className={styles.imageWrapper}
					>
						<AppImage
							className={styles.image}
							fallback={fallback}
							src={image?.Image_URL ?? ""}
							alt={product.Product_Name}
						/>
					</div>
				))}
			</Slider>

			<PriceLine product={product} />
			<Text
				TextType={"p"}
				color={"dark"}
				fontSize={"l"}
				fontWeight={"medium"}
			>
				{product.Product_Name}
			</Text>
			<Link to={getRouteProduct(product.Product_ID)}>
				<Text
					fontSize={"s"}
					color={"dark"}
					fontWeight={"medium-fat"}
				>
					Перейти
				</Text>
			</Link>
		</VStack>
	)
})

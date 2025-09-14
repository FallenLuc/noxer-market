import { getRouteProduct } from "@config/router"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import classNames from "classnames"
import { Link } from "react-router"
import type { productDataType } from "../../types/productData.type"
import { ImagesSlider } from "../ImagesSlider/ImagesSlider"
import { PriceLine } from "../PriceLine/PriceLine"
import { TagsStack } from "../TagsStack/TagsStack"
import styles from "./ProductCardFull.module.scss"

type ProductCardFullProps = {
	className?: string
	product: productDataType
}

export const ProductCardFull = TypedMemo((props: ProductCardFullProps) => {
	const { className, product } = props

	return (
		<VStack
			className={classNames(styles.ProductCardFull, className)}
			gap={"XS"}
			TagType={"article"}
			justify={"spaceBetween"}
		>
			<TagsStack
				product={product}
				className={styles.tags}
			/>
			<VStack gap={"XXS"}>
				<ImagesSlider product={product} />
				<PriceLine
					product={product}
					className={styles.gapAbove}
				/>
				<Text
					className={styles.text}
					TextType={"p"}
					color={"dark"}
					fontWeight={"medium"}
				>
					{product.Product_Name}
				</Text>
			</VStack>
			<Link
				to={getRouteProduct(product.Product_ID)}
				className={styles.button}
			>
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

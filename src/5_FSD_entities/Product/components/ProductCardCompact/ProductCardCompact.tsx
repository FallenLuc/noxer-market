import { getRouteProduct } from "@config/router"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { AppImage } from "@ui/AppImage"
import { Skeleton } from "@ui/Skeleton"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import classNames from "classnames"
import { useMemo } from "react"
import { Link } from "react-router"
import type { productDataType } from "../../types/productData.type"
import { PriceLine } from "../PriceLine/PriceLine"
import styles from "./ProductCardCompact.module.scss"

type ProductCardCompactProps = {
	className?: string
	product: productDataType
}

export const ProductCardCompact = TypedMemo((props: ProductCardCompactProps) => {
	const { className, product } = props

	const image = useMemo(() => product.images.find(({ MainImage }) => MainImage), [product.images])

	const fallback = useMemo(() => <Skeleton />, [])

	return (
		<Link to={getRouteProduct(product.Product_ID)}>
			<HStack
				gap={"L"}
				className={classNames(styles.ProductCardCompact, className)}
			>
				<div className={styles.imageWrapper}>
					<AppImage
						className={styles.image}
						fallback={fallback}
						src={image?.Image_URL || ""}
						alt={product.Product_Name}
					/>
				</div>

				<VStack gap={"M"}>
					<Text
						TextType={"p"}
						color={"dark"}
						fontSize={"l"}
						fontWeight={"medium"}
					>
						{product.Product_Name}
					</Text>
					<PriceLine product={product} />
				</VStack>
			</HStack>
		</Link>
	)
})

import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import classNames from "classnames"
import { useMemo } from "react"
import type { productDataType } from "../../types/productData.type"
import { ProductCard } from "../ProductCard/ProductCard"
import styles from "./ProductCardItemList.module.scss"

type ProductCardItemListProps = {
	className?: string
	products?: productDataType[]
	mode: "full" | "compact"
}

export const ProductCardItemList = TypedMemo((props: ProductCardItemListProps) => {
	const { className, products, mode } = props

	if (!products) return <Text>Ничего не найдено</Text> //todo стилизовать

	const content = useMemo(
		() =>
			products.map(product => (
				<ProductCard
					key={product.Product_ID}
					product={product}
					mode={mode}
				/>
			)),
		//eslint-disable-next-line
		[mode, products?.[0]?.Product_ID]
	)

	if (mode === "full") {
		return <div className={classNames(styles.ProductCardItemList, className)}>{content}</div>
	}

	return (
		<VStack className={classNames(styles.ProductCardItemListCompact, className)}>
			{content}
		</VStack>
	)
})

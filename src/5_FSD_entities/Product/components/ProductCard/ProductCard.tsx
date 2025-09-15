import { TypedMemo } from "@sharedProviders/TypedMemo"
import type { productDataType } from "../../types/productData.type"
import { ProductCardCompact } from "../ProductCardCompact/ProductCardCompact"
import { ProductCardFull } from "../ProductCardFull/ProductCardFull"

type ProductCardProps = {
	className?: string
	product: productDataType
	mode: "full" | "compact"
}

export const ProductCard = TypedMemo((props: ProductCardProps) => {
	const { className, mode, product } = props

	if (mode === "compact") {
		return (
			<ProductCardCompact
				product={product}
				className={className}
			/>
		)
	}

	return (
		<ProductCardFull
			product={product}
			className={className}
		/>
	)
})

import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { useMemo } from "react"
import { priceInformationParser } from "../../lib/helpers/priceInformationParser/priceInformationParser.helper"
import type { productDataType } from "../../types/productData.type"
import styles from "./PriceLine.module.scss"

type PriceLineProps = {
	className?: string
	product: productDataType
}

export const PriceLine = TypedMemo((props: PriceLineProps) => {
	const { product, className } = props

	const { discount, oldPrice, price } = useMemo(
		() => priceInformationParser(product),
		//eslint-disable-next-line
		[product.Product_ID]
	)

	return (
		<HStack
			align={"flexEnd"}
			className={className}
			gap={"XS"}
		>
			<Text
				className={styles.price}
				TextType={"p"}
				color={"dark"}
				fontWeight={"ultra-fat"}
			>
				{price} ₽
			</Text>
			{Boolean(oldPrice) && (
				<Text
					TextType={"span"}
					color={"gray-opacity-30"}
					fontSize={"xs"}
					fontWeight={"medium-fat"}
					texDecoration={"line-through"}
				>
					{oldPrice} ₽
				</Text>
			)}
			{Boolean(discount) && (
				<Text
					TextType={"span"}
					color={"red"}
					fontSize={"xs"}
					fontWeight={"medium-fat"}
					texDecoration={"line-through"}
				>
					-{discount}%
				</Text>
			)}
		</HStack>
	)
})

import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { useMemo } from "react"
import { priceInformationParser } from "../../lib/helpers/priceInformationParser/priceInformationParser.helper"
import type { productDataType } from "../../types/productData.type"

type PriceLineProps = {
	product: productDataType
}

export const PriceLine = TypedMemo((props: PriceLineProps) => {
	const { product } = props

	const { discount, oldPrice, price } = useMemo(
		() => priceInformationParser(product),
		//eslint-disable-next-line
		[product.Product_ID]
	)

	return (
		<HStack>
			<Text
				TextType={"p"}
				color={"dark"}
				fontSize={"xl"}
				fontWeight={"ultra-fat"}
			>
				{price} ₽
			</Text>
			{oldPrice && (
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
			{discount && (
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

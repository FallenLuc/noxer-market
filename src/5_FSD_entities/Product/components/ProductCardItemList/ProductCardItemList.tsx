import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Loader } from "@ui/Loader"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import classNames from "classnames"
import { type ReactNode, useMemo } from "react"
import type { productDataType } from "../../types/productData.type"
import { ProductCard } from "../ProductCard/ProductCard"
import styles from "./ProductCardItemList.module.scss"

type ProductCardItemListProps = {
	className?: string
	products?: productDataType[]
	isLoading?: boolean
	isShow?: boolean
	mode: "full" | "compact"
}

export const ProductCardItemList = TypedMemo((props: ProductCardItemListProps) => {
	const { className, products, mode, isLoading, isShow = true } = props

	if (!isShow) return null

	let content: ReactNode = <></>

	content = useMemo(
		() =>
			products?.map(product => (
				<ProductCard
					key={product.Product_ID}
					product={product}
					mode={mode}
				/>
			)),
		//eslint-disable-next-line
		[mode, products?.[0]?.Product_ID]
	)

	if (!products?.length)
		content = (
			<HStack
				justify={"center"}
				align={"center"}
				className={styles.error}
			>
				<Text
					color={"red"}
					fontWeight={"ultra-fat"}
					TextType={"h2"}
					fontSize={"xl"}
				>
					Ничего не получилось найти
				</Text>
			</HStack>
		)

	if (isLoading) {
		content = <Loader className={styles.loader} />
	}

	if (mode === "full") {
		return <div className={classNames(styles.ProductCardItemList, className)}>{content}</div>
	}

	return (
		<VStack
			className={classNames(
				styles.ProductCardItemListCompact,
				{ [styles.minHeight]: isLoading || !products?.length },
				className
			)}
		>
			{content}
		</VStack>
	)
})

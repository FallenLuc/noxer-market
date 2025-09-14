import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Loader } from "@ui/Loader"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import classNames from "classnames"
import { useCallback, useMemo } from "react"
import { VirtuosoGrid } from "react-virtuoso"
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

	if (isLoading) {
		return (
			<div
				className={classNames(
					mode == "compact" ?
						styles.ProductCardItemListCompact
					:	styles.ProductCardItemList,
					{ [styles.minHeight]: (isLoading || !products?.length) && mode === "compact" },
					className
				)}
			>
				<Loader className={styles.loader} />
			</div>
		)
	}

	if (!products?.length)
		return (
			<div
				className={classNames(
					mode == "compact" ?
						styles.ProductCardItemListCompact
					:	styles.ProductCardItemList,
					{ [styles.minHeight]: (isLoading || !products?.length) && mode === "compact" },
					className
				)}
			>
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
			</div>
		)

	const itemContent = useCallback(
		(_: any, item: productDataType) => (
			<ProductCard
				product={item}
				mode="compact"
			/>
		),
		[]
	)
	const computeItemKey = useCallback((_: any, item: productDataType) => item.Product_ID, [])

	const increaseViewportBy = useMemo(() => ({ top: 200, bottom: 300 }), [])

	return (
		<VirtuosoGrid
			data={products}
			itemContent={itemContent}
			computeItemKey={computeItemKey}
			listClassName={
				mode == "compact" ? styles.ProductCardItemListCompact : styles.ProductCardItemList
			}
			increaseViewportBy={increaseViewportBy}
			overscan={2}
		/>
	)
})

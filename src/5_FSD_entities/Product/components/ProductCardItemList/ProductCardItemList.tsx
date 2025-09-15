import { BP_S } from "@constants/common.constant"
import { useWindowSize } from "@hooks/useWindowSize.hook"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Loader } from "@ui/Loader"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import classNames from "classnames"
import { WindowVirtualizer } from "virtua"
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

	const size = useWindowSize()

	if (isLoading) {
		return (
			<div
				className={classNames(
					mode == "compact" ? styles.ProductCardItemListCompact : styles.gridList,
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
					mode == "compact" ? styles.ProductCardItemListCompact : styles.gridList,
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

	if (mode === "compact") {
		return (
			<div
				className={classNames(
					mode == "compact" ? styles.ProductCardItemListCompact : styles.gridList,
					{ [styles.minHeight]: (isLoading || !products?.length) && mode === "compact" },
					className
				)}
			>
				{products.map(product => (
					<ProductCard
						key={product.Product_ID}
						product={product}
						mode={mode}
					/>
				))}
			</div>
		)
	}

	let stack: productDataType[] = []

	const countGrid = size.width > BP_S ? 3 : 2

	return (
		<WindowVirtualizer>
			{products.map((product, i) => {
				stack.push(product)

				if ((i + 1) % countGrid === 0 || products.length - i + 1 < countGrid) {
					const mirrorStack = stack
					stack = []
					return (
						<div
							key={product.Product_ID}
							className={styles.gridList}
						>
							{mirrorStack.map(pr => (
								<ProductCard
									key={pr.Product_ID}
									product={pr}
									mode={"full"}
								/>
							))}
						</div>
					)
				}
			})}
		</WindowVirtualizer>
	)
})

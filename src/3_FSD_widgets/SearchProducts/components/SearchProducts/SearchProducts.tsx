import { ProductCardItemList } from "@entities/Product"
import { productsActions, useGetProductsFilteredDataSelector } from "@features/LoadProducts"
import { Search, useGetSearchValueSelector } from "@features/Search"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import classNames from "classnames"
import { useCallback, useState } from "react"

type SearchProductsProps = {
	className?: string
}

export const SearchProducts = TypedMemo((props: SearchProductsProps) => {
	const { className } = props

	const [isSearching, setIsSearching] = useState(false)

	const value = useGetSearchValueSelector()
	const { filter } = productsActions

	const dispatch = useAppDispatch()

	const filteredProducts = useGetProductsFilteredDataSelector()

	const onSearchHandler = useCallback(
		(value: string) => {
			dispatch(filter(value))
		},
		[dispatch, filter]
	)

	return (
		<div className={classNames(className)}>
			<Search
				autoFocus
				isSuggestions
				onSearch={onSearchHandler}
				setIsLoading={setIsSearching}
			/>
			<ProductCardItemList
				isShow={Boolean(value.trim())}
				mode={"compact"}
				isLoading={isSearching}
				products={filteredProducts}
			/>
		</div>
	)
})

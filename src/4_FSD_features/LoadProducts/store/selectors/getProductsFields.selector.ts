import { buildCreateSelector } from "@helpers/buildCreateSelector/buildCreateSelector.helper"
import { buildSelector } from "@helpers/buildSelector/buildSelector.helper"
import { type mainStateMap } from "@store/storeTypes/mainState.map"
import { initialStateAdapter, productsAdapter } from "../../config/productsAdapter.config"
import type { productsStateMap } from "../storeTypes/productsState.map"
import { getProductsSelector } from "./getProducts.selector"

export const [, getProductsPageSelector] = buildCreateSelector(
	[getProductsSelector],
	(state: productsStateMap) => state.page
)

export const [, getProductsPerPageSelector] = buildCreateSelector(
	[getProductsSelector],
	(state: productsStateMap) => state.perPage
)

export const [useGetProductsIsLoadingSelector] = buildCreateSelector(
	[getProductsSelector],
	(state: productsStateMap) => state.isLoading
)

export const [, getProductsHasNextSelector] = buildCreateSelector(
	[getProductsSelector],
	(state: productsStateMap) => state.hasNext
)

export const [useGetProductsInitSelector] = buildCreateSelector(
	[getProductsSelector],
	(state: productsStateMap) => state._init
)

export const [, getProductsCountRequestSelector] = buildCreateSelector(
	[getProductsSelector],
	(state: productsStateMap) => state.countRequest
)
export const [useGetProductsTriggerLoadSelector] = buildCreateSelector(
	[getProductsSelector],
	(state: productsStateMap) => state.triggerLoad
)

export const { selectAll: getProductsDataSelector } = productsAdapter.getSelectors<mainStateMap>(
	state => state.products || initialStateAdapter
)

export const [useGetProductsFilteredDataSelector] = buildCreateSelector(
	[getProductsSelector],
	(state: productsStateMap) => state.filteredProducts
)

export const [useGetProductsDataSelector] = buildSelector(getProductsDataSelector)

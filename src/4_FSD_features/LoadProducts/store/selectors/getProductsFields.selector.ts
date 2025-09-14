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

export const [, getProductsHasNextSelector] = buildCreateSelector(
	[getProductsSelector],
	(state: productsStateMap) => state.hasNext
)

export const { selectAll: getProductsDataSelector } = productsAdapter.getSelectors<mainStateMap>(
	state => state.products || initialStateAdapter
)

export const [useGetProductsDataSelector] = buildSelector(getProductsDataSelector)

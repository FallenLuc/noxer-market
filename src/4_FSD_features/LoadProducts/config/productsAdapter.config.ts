import type { productDataType } from "@entities/Product"
import { createEntityAdapter } from "@reduxjs/toolkit"
import type { productsStateMapBase } from "../store/storeTypes/productsState.map"

export const productsAdapter = createEntityAdapter({
	selectId: (p: productDataType) => p.Product_ID
})

export const initialStateAdapter = productsAdapter.getInitialState<productsStateMapBase>({
	isLoading: false,
	hasNext: true,
	error: "",
	perPage: 20,
	countRequest: 0,
	triggerLoad: true,
	filteredProducts: [],
	page: 1,
	_init: false
})

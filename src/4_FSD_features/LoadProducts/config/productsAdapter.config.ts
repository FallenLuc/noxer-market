import type { productDataType } from "@entities/Product"
import { createEntityAdapter } from "@reduxjs/toolkit"

export const productsAdapter = createEntityAdapter({
	selectId: (p: productDataType) => p.Product_ID
})

export const initialStateAdapter = productsAdapter.getInitialState({
	isLoading: false,
	hasNext: true,
	error: "",
	perPage: 20,
	page: 1
})

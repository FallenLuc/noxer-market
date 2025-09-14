import type { productDataType } from "@entities/Product"
import type { EntityState } from "@reduxjs/toolkit"

export type productsStateMapBase = {
	isLoading: boolean
	error: string
	hasNext: boolean
	perPage: number
	page: number
	filteredProducts: productDataType[]
	countRequest: number
	triggerLoad: boolean
	_init: boolean
}

export type productsStateMap = productsStateMapBase & EntityState<productDataType, number>

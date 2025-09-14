import type { productDataType } from "@entities/Product"
import type { EntityState } from "@reduxjs/toolkit"

export type productsStateMap = {
	isLoading: boolean
	error: string
	hasNext: boolean
	perPage: number
	page: number
} & EntityState<productDataType, number>

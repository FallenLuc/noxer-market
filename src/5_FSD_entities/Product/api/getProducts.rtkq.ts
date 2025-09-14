import { rtkBaseApi } from "@api/instances/rtkBase.api"
import { getRequestPathsProducts } from "@api/lib/helpers/getterRequestPaths.helper"
import type { paginationType } from "@customTypes/pagination.type"
import type { productDataType } from "@entities/Product"

export type productsResponseType = {
	pagination: paginationType
	products: productDataType[]
	status: string
}

export type getProductsParamsType = {
	perPage: number
	page: number
}

const getProductsRtkq = rtkBaseApi.injectEndpoints({
	endpoints: build => ({
		getProducts: build.query<productsResponseType, getProductsParamsType>({
			query: params => {
				return {
					url: getRequestPathsProducts(),
					params: {
						per_page: params.perPage,
						page: params.page,
						on_main: false
					}
				}
			}
		})
	})
})

export const { useGetProductsQuery } = getProductsRtkq
export const getProducts = getProductsRtkq.endpoints.getProducts.initiate

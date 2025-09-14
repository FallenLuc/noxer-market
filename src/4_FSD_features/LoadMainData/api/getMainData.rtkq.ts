import { rtkBaseApi } from "@api/instances/rtkBase.api"
import { getRequestPathsProducts } from "@api/lib/helpers/getterRequestPaths.helper"
import type { paginationType } from "@customTypes/pagination.type"
import type { categoryDataType } from "@entities/Category"
import type { productDataType, productMarkType } from "@entities/Product"

type responseType = {
	pagination: paginationType
	product_marks: productMarkType[]
	categories: categoryDataType[]
	products: productDataType[]
}

const getMainDataRtkq = rtkBaseApi.injectEndpoints({
	endpoints: build => ({
		getMainData: build.query<responseType, void>({
			query: () => {
				return {
					url: getRequestPathsProducts(),
					params: {
						on_main: true
					}
				}
			},
			keepUnusedDataFor: 1
		})
	})
})

export const { useGetMainDataQuery } = getMainDataRtkq

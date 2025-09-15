import { RoutePaths } from "../constants/routePaths.constant"

export const getRouteCatalog = () => {
	return RoutePaths.Catalog
}

export const getRouteProduct = (id: string | number) => {
	return RoutePaths.Product.replace(/:id/, id.toString())
}

export const getRouteSearch = () => {
	return RoutePaths.Search
}

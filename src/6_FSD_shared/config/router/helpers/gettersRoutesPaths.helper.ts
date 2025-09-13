import { RoutePaths } from "../constants/routePaths.constant"

export const getRouteMain = () => {
	return RoutePaths.Main
}
export const getRouteCatalog = () => {
	return RoutePaths.Catalog
}
export const getRouteFavourites = () => {
	return RoutePaths.Favourites
}
export const getRouteCart = () => {
	return RoutePaths.Cart
}
export const getRouteProfile = () => {
	return RoutePaths.Profile
}
export const getRouteProduct = (id: string) => {
	return RoutePaths.Product.replace(/:id/, id)
}

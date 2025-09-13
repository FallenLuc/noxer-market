import { routesConfig } from "../config/route.config"

export const getRouteConfigArray = (withOnlyIcon = true) => {
	const routeArray = Object.values(routesConfig)

	if (withOnlyIcon) {
		return routeArray.filter(({ isIcon }) => isIcon)
	}

	return routeArray
}

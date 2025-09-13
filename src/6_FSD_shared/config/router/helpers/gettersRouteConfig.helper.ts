import { routesConfig } from "../config/route.config"
import type { routesUnionPathType, routeWithIconType } from "../types/routeConfig.type"

export const getRouteConfigArray = () => {
	return Object.values(routesConfig)
}

export const getRouteWithIconConfigArray = () => {
	return Object.values(routesConfig).filter(
		({ isIcon }) => isIcon
	) as routeWithIconType<routesUnionPathType>[]
}

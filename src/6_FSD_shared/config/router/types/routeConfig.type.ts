import type { FC, SVGProps } from "react"
import type { RoutePaths } from "../constants/routePaths.constant"

export type routesUnionPathType = (typeof RoutePaths)[keyof typeof RoutePaths]

type baseRouteType<T extends routesUnionPathType> = {
	path: T
}

export type routeWithIconType<T extends routesUnionPathType> = baseRouteType<T> & {
	isIcon: true
	Icon: FC<SVGProps<SVGSVGElement>>
}

type routeWithoutIconType<T extends routesUnionPathType> = baseRouteType<T> & {
	isIcon: false
	Icon?: undefined
}

type routeItemType<T extends routesUnionPathType> = routeWithIconType<T> | routeWithoutIconType<T>

export type routesConfigType = { [T in routesUnionPathType]: routeItemType<T> }

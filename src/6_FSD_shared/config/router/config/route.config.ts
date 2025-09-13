import { CartIcon, CatalogIcon, FavoritesIcon, MainIcon, ProfileIcon } from "@assets/index"
import type { FC, SVGProps } from "react"
import { RoutePaths } from "../constants/routePaths.constant"
import type { routesUnionPathType } from "../types/routeConfig.type"

type baseRouteType<T extends routesUnionPathType> = {
	path: T
}

type routeItemType<T extends routesUnionPathType> =
	| (baseRouteType<T> & { isIcon: true; Icon: FC<SVGProps<SVGSVGElement>> })
	| (baseRouteType<T> & { isIcon: false; Icon?: undefined })

type routesConfigType = { [T in routesUnionPathType]: routeItemType<T> }

export const routesConfig = {
	[RoutePaths.Main]: {
		path: RoutePaths.Main,
		isIcon: true,
		Icon: MainIcon
	},
	[RoutePaths.Catalog]: {
		path: RoutePaths.Catalog,
		isIcon: true,
		Icon: CatalogIcon
	},
	[RoutePaths.Favourites]: {
		path: RoutePaths.Favourites,
		isIcon: true,
		Icon: FavoritesIcon
	},
	[RoutePaths.Cart]: {
		path: RoutePaths.Cart,
		isIcon: true,
		Icon: CartIcon
	},
	[RoutePaths.Profile]: {
		path: RoutePaths.Profile,
		isIcon: true,
		Icon: ProfileIcon
	},
	[RoutePaths.Product]: {
		path: RoutePaths.Product,
		isIcon: false
	},
	[RoutePaths.NotFound]: {
		path: RoutePaths.NotFound,
		isIcon: false
	}
} as const satisfies routesConfigType

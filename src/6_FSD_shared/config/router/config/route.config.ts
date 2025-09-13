import { CartIcon, CatalogIcon, FavoritesIcon, MainIcon, ProfileIcon } from "@assets/index"
import { RoutePaths } from "../constants/routePaths.constant"
import type { routesConfigType } from "../types/routeConfig.type"

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

import type { routesUnionPathType } from "@config/router"
import { getRouteConfigArray, RoutePaths } from "@config/router"
import { CartPage } from "@pages/CartPage"
import { CatalogPage } from "@pages/CatalogPage"
import { FavoritesPage } from "@pages/FavoritesPage"
import { MainPage } from "@pages/MainPage"
import { NotFoundPage } from "@pages/NotFoundPage"
import { ProductPage } from "@pages/ProductPage"
import { ProfilePage } from "@pages/ProfilePage"
import { SearchPage } from "@pages/SearchPage"
import type { ReactNode } from "react"
import { memo, Suspense, useMemo } from "react"
import { Route, Routes } from "react-router-dom"

type mapperPagesType = Record<routesUnionPathType, ReactNode>

const mapperPageNameComponent: mapperPagesType = {
	[RoutePaths.Main]: <MainPage />,
	[RoutePaths.Cart]: <CartPage />,
	[RoutePaths.Catalog]: <CatalogPage />,
	[RoutePaths.Favourites]: <FavoritesPage />,
	[RoutePaths.Product]: <ProductPage />,
	[RoutePaths.Profile]: <ProfilePage />,
	[RoutePaths.Search]: <SearchPage />,
	[RoutePaths.NotFound]: <NotFoundPage />
}

export const RouterProvider = memo(() => {
	const fallbackPage = useMemo(() => <></>, [])

	return (
		<Suspense fallback={fallbackPage}>
			<Routes>
				{getRouteConfigArray().map((item, i) => (
					<Route
						key={i}
						path={item.path}
						element={mapperPageNameComponent[item.path]}
					/>
				))}
			</Routes>
		</Suspense>
	)
})

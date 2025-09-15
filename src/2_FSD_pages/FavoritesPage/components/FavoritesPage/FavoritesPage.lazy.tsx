import { lazy } from "react"

const FavoritesPageLazy = lazy(() => import("./Favorites.page"))

export { FavoritesPageLazy as FavoritesPage }

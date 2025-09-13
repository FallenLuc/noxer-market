import { lazy } from "react"

const CatalogPageLazy = lazy(() => import("./Catalog.page"))

export { CatalogPageLazy as CatalogPage }

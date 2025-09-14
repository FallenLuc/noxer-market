import { lazy } from "react"

const SearchPageLazy = lazy(() => import("./Search.page"))

export { SearchPageLazy as SearchPage }

import { lazy } from "react"

const ProductPageLazy = lazy(() => import("./Product.page"))

export { ProductPageLazy as ProductPage }

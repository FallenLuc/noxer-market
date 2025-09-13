import { lazy } from "react"

const CartPageLazy = lazy(() => import("./Cart.page"))

export { CartPageLazy as CartPage }

import { buildSelector } from "@helpers/buildSelector/buildSelector.helper"
import type { mainStateMap } from "@store/storeTypes/mainState.map"

export const [, getProductsSelector] = buildSelector((state: mainStateMap) => state.products)

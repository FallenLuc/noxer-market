import type { rtkBaseApi } from "@api/instances/rtkBase.api"
import type { productsStateMap } from "@features/LoadProducts/store/storeTypes/productsState.map"

export type mainStateMap = {
	products: productsStateMap
	[rtkBaseApi.reducerPath]: ReturnType<typeof rtkBaseApi.reducer>
}

import type { rtkBaseApi } from "@api/instances/rtkBase.api"
import type { productsStateMap } from "@features/LoadProducts/store/storeTypes/productsState.map"
import type { searchStateMap } from "@features/Search"

export type mainStateMap = {
	products: productsStateMap
	search: searchStateMap
	[rtkBaseApi.reducerPath]: ReturnType<typeof rtkBaseApi.reducer>
}

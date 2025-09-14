import { rtkBaseApi } from "@api/instances/rtkBase.api"
import { productsReducer } from "@features/LoadProducts"

import type { ReducersMapObject } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import { type mainStateMap } from "./storeTypes/mainState.map"

export function createReduxStore(initialState?: mainStateMap) {
	const rootReducer: ReducersMapObject<mainStateMap> = {
		products: productsReducer,
		[rtkBaseApi.reducerPath]: rtkBaseApi.reducer
	}

	const appStore = configureStore({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat(rtkBaseApi.middleware)
	})

	return appStore
}

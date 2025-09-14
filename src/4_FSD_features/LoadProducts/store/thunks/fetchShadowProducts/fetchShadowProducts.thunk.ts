import { createAsyncThunk } from "@reduxjs/toolkit"
import type { thunkConfigType } from "@store/storeTypes/thunks.type"
import { getProductsHasNextSelector } from "../../selectors/getProductsFields.selector"
import { fetchProductsThunk } from "../fetchProducts/fetchProducts.thunk"

export const fetchShadowProductsThunk = createAsyncThunk<
	undefined,
	undefined,
	thunkConfigType<undefined>
>("products/fetchShadowProducts", async (_, thunkAPI) => {
	const { dispatch, getState } = thunkAPI

	const selectHasNext = getProductsHasNextSelector()

	let hasNext = selectHasNext(getState())

	while (hasNext === true) {
		try {
			await dispatch(fetchProductsThunk())
			await new Promise(resolve => setTimeout(resolve, 500))
			hasNext = selectHasNext(getState())
		} catch {
			hasNext = false
		}
	}

	return undefined
})

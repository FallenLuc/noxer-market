import { createAsyncThunk } from "@reduxjs/toolkit"
import type { thunkConfigType } from "@store/storeTypes/thunks.type"
import { getProductsCountRequestSelector, getProductsHasNextSelector } from "../../selectors/getProductsFields.selector"
import { fetchProductsThunk } from "../fetchProducts/fetchProducts.thunk"

export const fetchShadowProductsThunk = createAsyncThunk<
	undefined,
	undefined,
	thunkConfigType<undefined>
>("products/fetchShadowProducts", async (_, thunkAPI) => {
	const { dispatch, getState } = thunkAPI

	const selectHasNext = getProductsHasNextSelector()
	const selectCountRequest = getProductsCountRequestSelector()

	let hasNext = selectHasNext(getState())
	let countRequest = selectCountRequest(getState())

	while (hasNext === true && countRequest < 10) {
		try {
			await dispatch(fetchProductsThunk())
			await new Promise(resolve => setTimeout(resolve, 500))
			hasNext = selectHasNext(getState())
			countRequest = selectCountRequest(getState())
		} catch {
			hasNext = false
		}
	}

	return undefined
})

import type { productsResponseType } from "@entities/Product"
import { getProducts } from "@entities/Product"
import { createAsyncThunk } from "@reduxjs/toolkit"
import type { thunkConfigType } from "@store/storeTypes/thunks.type"
import {
	getProductsPageSelector,
	getProductsPerPageSelector
} from "../../selectors/getProductsFields.selector"

export const fetchProductsThunk = createAsyncThunk<
	productsResponseType,
	undefined,
	thunkConfigType<string>
>("products/fetchProducts", async (_, thunkAPI) => {
	const { dispatch, rejectWithValue, getState } = thunkAPI
	try {
		const state = getState()

		const page = getProductsPageSelector()(state)
		const perPage = getProductsPerPageSelector()(state)

		const response = await dispatch(getProducts({ page, perPage })).unwrap()

		if (response.status === "ok") {
			return response
		} else {
			return rejectWithValue("error with load products")
		}
	} catch {
		return rejectWithValue("error with load products")
	}
})

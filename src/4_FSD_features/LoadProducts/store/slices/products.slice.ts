import { buildSlice } from "@helpers/buildSlice/buildSlice.helper"
import { initialStateAdapter, productsAdapter } from "../../config/productsAdapter.config"
import { fetchProductsThunk } from "../thunks/fetchProducts/fetchProducts.thunk"

const productsSlice = buildSlice({
	name: "products",
	initialState: initialStateAdapter,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchProductsThunk.pending, state => {
				state.isLoading = true
				state.error = ""
			})
			.addCase(fetchProductsThunk.fulfilled, (state, action) => {
				state.isLoading = false
				state.error = ""

				const products = action.payload.products

				productsAdapter.addMany(state, products)

				const hasNext = action.payload.pagination.has_next
				const perPage = action.payload.pagination.per_page

				const page = action.payload.pagination.current_page + 1

				state.hasNext = page > 5 ? false : hasNext

				if (hasNext) {
					state.page = page
				}

				if (perPage === 20) {
					state.perPage = 50
				}
			})
			.addCase(fetchProductsThunk.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload || ""
			})
	}
})

export const { actions: productsActions } = productsSlice
export const { useActions: useProductsActions } = productsSlice
export const { reducer: productsReducer } = productsSlice

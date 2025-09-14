export { productsReducer, productsActions } from "./store/slices/products.slice"
export {
	useGetProductsDataSelector,
	useGetProductsFilteredDataSelector,
	useGetProductsTriggerLoadSelector
} from "./store/selectors/getProductsFields.selector"

export { fetchShadowProductsThunk } from "./store/thunks/fetchShadowProducts/fetchShadowProducts.thunk"

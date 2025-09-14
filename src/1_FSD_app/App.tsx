import { fetchShadowProductsThunk } from "@features/LoadProducts/store/thunks/fetchShadowProducts/fetchShadowProducts.thunk"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { useInitialEffect } from "@hooks/useInitialEffect.hook"
import { ErrorBoundaryProvider } from "@providers/ErrorBoundaryProvider"
import { RouterProvider } from "@providers/RouterProvider"
import { memo, useCallback } from "react"

const App = memo(() => {
	const dispatch = useAppDispatch()

	useInitialEffect(useCallback(() => dispatch(fetchShadowProductsThunk()), [dispatch]))

	return (
		<div className={"app"}>
			<ErrorBoundaryProvider>
				<RouterProvider />
			</ErrorBoundaryProvider>
		</div>
	)
})

export default App

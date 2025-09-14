import { fetchShadowProductsThunk, useGetProductsTriggerLoadSelector } from "@features/LoadProducts"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { ErrorBoundaryProvider } from "@providers/ErrorBoundaryProvider"
import { RouterProvider } from "@providers/RouterProvider"
import { memo, useEffect } from "react"

const App = memo(() => {
	const dispatch = useAppDispatch()

	const trigger = useGetProductsTriggerLoadSelector()

	useEffect(() => {
		dispatch(fetchShadowProductsThunk())
	}, [dispatch, trigger])

	return (
		<div className={"app"}>
			<ErrorBoundaryProvider>
				<RouterProvider />
			</ErrorBoundaryProvider>
		</div>
	)
})

export default App

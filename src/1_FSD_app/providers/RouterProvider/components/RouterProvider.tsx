import { MainPage } from "@pages/MainPage"
import { memo, Suspense, useMemo } from "react"
import { Route, Routes } from "react-router-dom"

export const RouterProvider = memo(() => {
	const fallbackPage = useMemo(() => <></>, [])

	const element = useMemo(() => <MainPage />, [])
	// todo сделать роутинг
	return (
		<Suspense fallback={fallbackPage}>
			<Routes>
				<Route
					path={"/"}
					element={element}
				/>
			</Routes>
		</Suspense>
	)
})

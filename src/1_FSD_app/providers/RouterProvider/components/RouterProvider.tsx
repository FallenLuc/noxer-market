import { MainPage } from "@pages/MainPage"
import { memo, Suspense, useMemo } from "react"
import { Routes } from "react-router-dom"

export const RouterProvider = memo(() => {
	const fallbackPage = useMemo(() => <></>, [])

	return (
		<Suspense fallback={fallbackPage}>
			<Routes>
				<MainPage/>
			</Routes>
		</Suspense>
	)
})

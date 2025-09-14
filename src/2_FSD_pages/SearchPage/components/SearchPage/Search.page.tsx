import { productsActions } from "@features/LoadProducts"
import { searchActions } from "@features/Search"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { Footer } from "@widgets/Footer"
import { SearchProducts } from "@widgets/SearchProducts"

import { useEffect, useMemo } from "react"

const SearchPage = TypedMemo(() => {
	const footer = useMemo(
		() => (
			<ContainerLayout>
				<Footer />
			</ContainerLayout>
		),
		[]
	)

	const { clearValue } = searchActions
	const { clearFilter } = productsActions
	const dispatch = useAppDispatch()

	useEffect(() => {
		return () => {
			dispatch(clearValue())
			dispatch(clearFilter())
		}
	}, [clearFilter, clearValue, dispatch])

	return (
		<Page footer={footer}>
			<ContainerLayout>
				<SearchProducts />
			</ContainerLayout>
		</Page>
	)
})

export default SearchPage

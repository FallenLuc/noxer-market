import { Search } from "@features/Search"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { Footer } from "@widgets/Footer"
import { useMemo } from "react"

const SearchPage = TypedMemo(() => {
	const footer = useMemo(
		() => (
			<ContainerLayout>
				<Footer />
			</ContainerLayout>
		),
		[]
	)

	return (
		<Page footer={footer}>
			<ContainerLayout>
				<Search
					autoFocus
					isSuggestions
				/>
			</ContainerLayout>
		</Page>
	)
})

export default SearchPage

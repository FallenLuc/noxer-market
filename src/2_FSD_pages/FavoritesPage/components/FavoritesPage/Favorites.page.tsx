import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { Footer } from "@widgets/Footer"
import { useMemo } from "react"

const FavoritesPage = TypedMemo(() => {
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
				<h1>Привет избранное</h1>
			</ContainerLayout>
		</Page>
	)
})

export default FavoritesPage

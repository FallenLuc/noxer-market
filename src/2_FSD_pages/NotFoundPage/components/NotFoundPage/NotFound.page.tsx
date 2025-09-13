import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { useMemo } from "react"

const NotFoundPage = TypedMemo(() => {
	const footer = useMemo(
		() => (
			<ContainerLayout>
				<h1>Привет футер</h1>
			</ContainerLayout>
		),
		[]
	)
	return (
		<Page footer={footer}>
			<ContainerLayout>
				<h1>Привет неизвестность</h1>
			</ContainerLayout>
		</Page>
	)
})

export default NotFoundPage

import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { useMemo } from "react"

const CartPage = TypedMemo(() => {
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
				<h1>Привет корзина</h1>
			</ContainerLayout>
		</Page>
	)
})

export default CartPage

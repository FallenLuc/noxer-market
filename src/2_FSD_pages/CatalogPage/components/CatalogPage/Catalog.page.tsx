import { ProductCardItemList } from "@entities/Product"
import { useGetProductsDataSelector } from "@features/LoadProducts/store/selectors/getProductsFields.selector"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { Footer } from "@widgets/Footer"
import { useMemo } from "react"

const CatalogPage = TypedMemo(() => {
	const footer = useMemo(
		() => (
			<ContainerLayout>
				<Footer />
			</ContainerLayout>
		),
		[]
	)

	const products = useGetProductsDataSelector()

	return (
		<Page footer={footer}>
			<ContainerLayout>
				<VStack gap={"M"}>
					<Text
						color={"dark"}
						fontWeight={"fat"}
						TextType={"h1"}
						fontSize={"xl"}
					>
						Привет Каталог
					</Text>
					<ProductCardItemList
						mode={"full"}
						products={products}
					/>
				</VStack>
			</ContainerLayout>
		</Page>
	)
})

export default CatalogPage

import { CategorySliderList } from "@entities/Category"
import { ProductCardItemList } from "@entities/Product"
import { useGetMainDataQuery } from "@features/LoadMainData"
import { Search } from "@features/Search"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Loader } from "@ui/Loader"
import { Page } from "@ui/Page"
import { VStack } from "@ui/Stack"
import { Footer } from "@widgets/Footer"
import { PromoSlider } from "@widgets/PromoSlider"
import { useMemo } from "react"

const MainPage = TypedMemo(() => {
	const footer = useMemo(
		() => (
			<ContainerLayout>
				<Footer />
			</ContainerLayout>
		),
		[]
	)
	const { data, isLoading, isError } = useGetMainDataQuery()

	//todo доработать обработку ошибки
	return (
		<Page footer={footer}>
			<ContainerLayout>
				{isLoading && <Loader />}
				{isError && <h1>Ошибка</h1>}
				<VStack gap={"S"}>
					<Search />
					<PromoSlider />
					<CategorySliderList
						mode={"full"}
						categories={data?.categories}
					/>
					<ProductCardItemList
						mode={"full"}
						products={data?.products}
					/>
				</VStack>
			</ContainerLayout>
		</Page>
	)
})

export default MainPage

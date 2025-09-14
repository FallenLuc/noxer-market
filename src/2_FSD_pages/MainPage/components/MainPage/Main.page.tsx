import { ProductCardItemList } from "@entities/Product/components/ProductCardItemList/ProductCardItemList"
import { useGetMainDataQuery } from "@features/LoadMainData"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Loader } from "@ui/Loader"
import { Page } from "@ui/Page"
import { Footer } from "@widgets/Footer"
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

	return (
		<Page footer={footer}>
			<ContainerLayout>
				{isLoading && <Loader />}
				{isError && <h1>Ошибка</h1>}

				<ProductCardItemList
					mode={"full"}
					products={data?.products}
				/>
			</ContainerLayout>
		</Page>
	)
})

export default MainPage

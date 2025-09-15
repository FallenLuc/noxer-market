import { CategorySliderList } from "@entities/Category"
import { ProductCardItemList } from "@entities/Product"
import { useGetMainDataQuery } from "@features/LoadMainData"
import { Search } from "@features/Search"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Loader } from "@ui/Loader"
import { Page } from "@ui/Page"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { Footer } from "@widgets/Footer"
import { PromoSlider } from "@widgets/PromoSlider"
import { useMemo } from "react"
import styles from "./MainPage.module.scss"

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

	const Error = (
		<HStack
			justify={"center"}
			align={"center"}
			className={styles.error}
		>
			<Text
				color={"red"}
				fontWeight={"ultra-fat"}
				TextType={"h2"}
				fontSize={"xl"}
			>
				Ничего не получилось найти
			</Text>
		</HStack>
	)
	return (
		<Page footer={footer}>
			<ContainerLayout>
				{isLoading && <Loader />}
				{isError && Error}
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

import type { categoryDataType } from "../../Category"

export type productDataType = {
	Product_ID: number
	Product_Name: string
	images: productImageType[]
	marks?: productMarkType[]
	parameters?: productParameterType[]
	categories: categoryDataType[]
}

type productImageType = {
	Image_ID: number
	Image_URL: string
	MainImage: boolean
}

export type productMarkType = {
	Mark_ID: number
	Mark_Name: string
}

type productParameterType = {
	Parameter_ID: number
	chosen: boolean
	price: number
	old_price?: number
}

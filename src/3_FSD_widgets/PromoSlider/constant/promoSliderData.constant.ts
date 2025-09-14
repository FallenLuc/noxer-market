import { getRouteCatalog } from "@config/router"
import { uid } from "uid"
import type { sliderItemDataType } from "../types/sliderItemData.type"

// Не нашел где это можно в api получить, поэтому сделал mock

export const promoSliderData: sliderItemDataType[] = [
	{
		id: uid(),
		image: "https://www.marketing91.com/wp-content/uploads/2022/09/Marketing-Promotion.jpg",
		link: getRouteCatalog()
	},
	{
		id: uid(),
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4rNtu_0P0ql6IyhoTm-lYW6Z_Cr60yUfcXA&s",
		link: getRouteCatalog()
	},
	{
		id: uid(),
		image: "https://static.vecteezy.com/system/resources/thumbnails/005/725/619/small_2x/set-of-special-offer-sale-red-tag-isolated-illustration-discount-offer-price-label-symbol-for-advertising-campaign-in-retail-sale-promo-marketing-25-50-75-percent-off-discount-sticker-vector.jpg",
		link: getRouteCatalog()
	}
]

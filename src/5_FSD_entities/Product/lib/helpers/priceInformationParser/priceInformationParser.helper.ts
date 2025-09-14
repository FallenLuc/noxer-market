import type { productDataType } from "../../../types/productData.type"

export function priceInformationParser(product: productDataType) {
	const { parameters } = product
	let price = 0
	let oldPrice = 0
	let discount = 0

	if (parameters) {
		const parameter = parameters.find(({ chosen }) => chosen)

		price = parameter?.price ?? 0
		oldPrice = parameter?.old_price ?? 0
	}

	if (oldPrice) {
		discount = Math.round(((oldPrice - price) / oldPrice) * 100)
	}

	return {
		price,
		oldPrice,
		discount
	}
}

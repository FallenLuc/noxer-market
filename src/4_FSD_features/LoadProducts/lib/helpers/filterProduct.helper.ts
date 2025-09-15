import type { productDataType } from "@entities/Product"

function normalizeQuery(q: string): string {
	return q.trim().toLowerCase().replace(/\s+/g, " ")
}

export function filterProduct(products: productDataType[], value: string): productDataType[] {
	const normalized = normalizeQuery(value)

	if (!normalized) return []

	const limited: productDataType[] = []

	//eslint-disable-next-line
	for (let i = 0; i < products.length; i++) {
		const productName = normalizeQuery(products[i].Product_Name)

		if (!productName.includes(normalized)) continue

		limited.push(products[i])

		if (limited.length === 10) break
	}

	return limited
}

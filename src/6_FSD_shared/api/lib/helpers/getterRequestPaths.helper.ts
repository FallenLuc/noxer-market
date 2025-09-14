import { RequestPaths } from "../../constants/requestPath.constant"

export function getRequestPathsProductItem(id: string | number) {
	return `${RequestPaths.Product}/${id.toString()}`
}

export function getRequestPathsProducts() {
	return `${RequestPaths.Products}`
}

import type { buildMode, buildOptionsType } from "../types/config"

export function getApi(mode: buildMode, apiUrl?: buildOptionsType["apiUrl"]) {
	if (apiUrl) {
		return apiUrl
	}

	if (mode === "production") {
		return "https://noxer-test.ru/webapp/api"
	}

	return "https://noxer-test.ru/webapp/api"
}

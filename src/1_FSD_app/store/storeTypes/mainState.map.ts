import type { rtkBaseApi } from "@api/instances/rtkBase.api"

export type mainStateMap = {
	[rtkBaseApi.reducerPath]: ReturnType<typeof rtkBaseApi.reducer>
}

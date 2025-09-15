import type { createReduxStore } from "../store"

type appStoreType = ReturnType<typeof createReduxStore>

export type appDispatchType = appStoreType["dispatch"]

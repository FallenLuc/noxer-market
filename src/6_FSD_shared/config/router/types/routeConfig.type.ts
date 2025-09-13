import type { RoutePaths } from "../constants/routePaths.constant"

export type routesUnionPathType = (typeof RoutePaths)[keyof typeof RoutePaths]

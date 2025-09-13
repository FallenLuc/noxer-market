import { lazy } from "react"

const ProfilePageLazy = lazy(() => import("./Profile.page"))

export { ProfilePageLazy as ProfilePage }

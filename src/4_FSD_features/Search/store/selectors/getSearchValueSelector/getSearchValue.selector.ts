import { buildSelector } from "@helpers/buildSelector/buildSelector.helper"

export const [useGetSearchValueSelector] = buildSelector(state => state.search.value)

import { buildSlice } from "@helpers/buildSlice/buildSlice.helper"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { searchStateMap } from "../storeTypes/searchStateMap.map"

const initialState: searchStateMap = { value: "" }

const searchSlice = buildSlice({
	name: "search",
	initialState,
	reducers: {
		updateValue: (state, action: PayloadAction<string>) => {
			state.value = action.payload
		},
		clearValue: state => {
			state.value = ""
		}
	}
})

export const { actions: searchActions } = searchSlice
export const { useActions: useSearchActions } = searchSlice
export const { reducer: searchReducer } = searchSlice

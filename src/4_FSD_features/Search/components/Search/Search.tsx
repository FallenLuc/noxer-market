import { getRouteSearch } from "@config/router"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Input } from "@ui/Input"
import { VStack } from "@ui/Stack"
import classNames from "classnames"
import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Suggestions } from "../Suggestions/Suggestions"
import styles from "./Search.module.scss"

type SearchProps = {
	className?: string
	isSuggestions?: boolean
	autoFocus?: boolean
}

export const Search = TypedMemo((props: SearchProps) => {
	const { className, autoFocus = false, isSuggestions = false } = props

	const navigate = useNavigate()
	const [value, setValue] = useState("")

	const onChangeHandler = useCallback((value: string) => setValue(value), [])

	const onFocusHandler = useCallback(() => {
		setTimeout(() => navigate(getRouteSearch()), 0) // избежать выполнения navigate до монтирования компонента при autofocus
	}, [navigate])

	return (
		<VStack
			className={classNames(styles.Search, className)}
			gap={"M"}
		>
			<Input
				autoFocus={autoFocus}
				value={value}
				onChange={onChangeHandler}
				onFocus={onFocusHandler}
			/>
			{isSuggestions && <Suggestions onClick={onChangeHandler} />}
		</VStack>
	)
})

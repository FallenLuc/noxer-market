import { getRouteSearch } from "@config/router"
import { useDebounce } from "@hooks/useDebounce.hook"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Input } from "@ui/Input"
import { VStack } from "@ui/Stack"
import classNames from "classnames"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { useGetSearchValueSelector } from "../../store/selectors/getSearchValueSelector/getSearchValue.selector"
import { useSearchActions } from "../../store/slices/search.slice"
import { Suggestions } from "../Suggestions/Suggestions"
import styles from "./Search.module.scss"

type SearchProps = {
	className?: string
	isSuggestions?: boolean
	autoFocus?: boolean
	setIsLoading?: (value: boolean) => void
	onSearch?: (value: string) => void
}

export const Search = TypedMemo((props: SearchProps) => {
	const { className, autoFocus = false, isSuggestions = false, onSearch, setIsLoading } = props

	const navigate = useNavigate()

	const value = useGetSearchValueSelector()
	const { updateValue, clearValue } = useSearchActions()

	const onSearchDebounce = useDebounce(
		useCallback(
			(value: string) => {
				onSearch?.(value)
				setIsLoading?.(false)
			},
			[onSearch, setIsLoading]
		),
		500
	)

	const onClearHandler = useCallback(() => {
		clearValue()
		setIsLoading?.(true)
		onSearchDebounce("")
	}, [clearValue, onSearchDebounce, setIsLoading])

	const onChangeHandler = useCallback(
		(value: string) => {
			updateValue(value)
			setIsLoading?.(true)
			onSearchDebounce(value)
		},
		[onSearchDebounce, setIsLoading, updateValue]
	)

	const onFocusHandler = useCallback(() => {
		setTimeout(() => navigate(getRouteSearch()), 0) // избежать выполнения navigate до монтирования компонента при autofocus
	}, [navigate])

	return (
		<VStack
			className={classNames(styles.Search, className)}
			gap={"M"}
		>
			<Input
				onClick={onClearHandler}
				autoFocus={autoFocus}
				value={value}
				onChange={onChangeHandler}
				onFocus={onFocusHandler}
			/>
			{isSuggestions && !value && <Suggestions onClick={onChangeHandler} />}
		</VStack>
	)
})

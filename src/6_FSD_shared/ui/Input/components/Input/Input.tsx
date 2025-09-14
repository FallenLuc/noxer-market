import { SearchIcon } from "@assets/index"
import { Input as InputComponent } from "@headlessui/react"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import classNames from "classnames"
import type { ChangeEvent } from "react"
import { useCallback, useState } from "react"
import { Text } from "../../../Text"
import styles from "./Input.module.scss"

type InputProps = {
	className?: string
	placeholder?: string
	onClick?: () => void
	onChange?: (value: string) => void
	onFocus?: () => void
	autoFocus?: boolean
	value?: string
}

export const Input = TypedMemo((props: InputProps) => {
	const {
		className,
		value = "",
		onClick,
		onChange,
		placeholder,
		onFocus,
		autoFocus = false
	} = props

	const [isShowButton, setIsShowButton] = useState(Boolean(value))

	const onChangeHandler = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const { value } = event.target
			if (value !== "") {
				setIsShowButton(true)
			} else {
				setIsShowButton(false)
			}

			onChange?.(value)
		},
		[onChange]
	)

	return (
		<div className={styles.inputWrapper}>
			<SearchIcon className={styles.icon} />
			<InputComponent
				autoFocus={autoFocus}
				onFocus={onFocus}
				placeholder={placeholder}
				className={classNames(styles.Input, className)}
				value={value}
				onChange={onChangeHandler}
			/>
			{isShowButton && (
				<button
					onClick={onClick}
					className={styles.button}
				>
					<Text
						color={"white"}
						fontSize={"xs"}
						fontWeight={"medium-fat"}
					>
						Очистить
					</Text>
				</button>
			)}
		</div>
	)
})

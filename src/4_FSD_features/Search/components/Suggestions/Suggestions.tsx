import { SearchIcon } from "@assets/index"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import classNames from "classnames"
import { oftenSearchData } from "../../constants/oftenSearchData.constant"
import styles from "./Suggestions.module.scss"

type SuggestionsProps = {
	className?: string
	onClick?: (value: string) => void
}

export const Suggestions = TypedMemo((props: SuggestionsProps) => {
	const { className, onClick } = props

	const onClickHandler = (value: string) => {
		return () => {
			onClick?.(value)
		}
	}

	return (
		<VStack
			className={classNames(styles.Suggestions, className)}
			gap={"S"}
		>
			<Text
				TextType={"h2"}
				fontWeight={"ultra-fat"}
				color={"dark"}
				className={styles.title}
			>
				Часто ищут
			</Text>
			<VStack TagType={"ul"}>
				{oftenSearchData.map(item => (
					<HStack
						TagType={"li"}
						key={item.id}
						gap={"S"}
						className={styles.item}
						onClick={onClickHandler(item.text)}
						align={"center"}
					>
						<SearchIcon className={styles.icon} />
						<Text
							color={"dark"}
							className={styles.textItem}
						>
							{item.text}
						</Text>
					</HStack>
				))}
			</VStack>
		</VStack>
	)
})

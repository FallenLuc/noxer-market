import { tagHitUrl, tagNewUrl, tagPremiumUrl, tagSaleUrl } from "@assets/index"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { AppImage } from "@ui/AppImage"
import { VStack } from "@ui/Stack"
import classNames from "classnames"
import { useMemo } from "react"
import type { productDataType } from "../../types/productData.type"
import styles from "./TagsStack.module.scss"

type TagsStackProps = {
	className?: string
	product: productDataType
}

export const TagsStack = TypedMemo((props: TagsStackProps) => {
	const { className, product } = props

	const marks = useMemo(
		() => product.marks,
		//eslint-disable-next-line
		[product.Product_ID]
	)

	const mapper: Record<string, string> = {
		"1": tagSaleUrl,
		"2": tagNewUrl,
		"3": tagHitUrl,
		"4": tagPremiumUrl
	}

	return (
		<VStack
			className={classNames(className)}
			gap={"XS"}
		>
			{marks?.map(mark => {
				const icon = mapper[mark.Mark_ID.toString()]

				if (icon) {
					return (
						<AppImage
							className={styles.image}
							key={mark.Mark_ID}
							src={icon}
							alt={mark.Mark_Name}
						/>
					)
				}
			})}
		</VStack>
	)
})

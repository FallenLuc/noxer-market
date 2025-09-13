import { getRouteWithIconConfigArray } from "@config/router"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import classNames from "classnames"
import { NavLink } from "react-router"
import styles from "./Navigation.module.scss"

type NavigationProps = {
	className?: string
}

export const Navigation = TypedMemo((props: NavigationProps) => {
	const { className } = props

	return (
		<HStack
			className={classNames(styles.Navigation, className)}
			align={"center"}
			justify={"spaceBetween"}
			TagType={"nav"}
		>
			{getRouteWithIconConfigArray().map((item, i) => {
				const Icon = item.Icon
				return (
					<li key={i}>
						<NavLink to={item.path}>
							{({ isActive }) => (
								<Icon
									className={classNames(styles.icon, {
										[styles.active]: isActive
									})}
								/>
							)}
						</NavLink>
					</li>
				)
			})}
		</HStack>
	)
})

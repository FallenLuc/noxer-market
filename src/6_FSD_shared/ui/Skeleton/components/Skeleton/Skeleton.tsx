import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Skeleton as SkeletonComponent } from "antd"
import style from "./Skeleton.module.scss"

type SkeletonProps = {
	className?: string
}

export const Skeleton = TypedMemo((props: SkeletonProps) => {
	const { className } = props

	return (
		<SkeletonComponent.Image
			active
			rootClassName={style.Skeleton}
			className={className}
		/>
	)
})

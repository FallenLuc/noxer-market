import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Skeleton as SkeletonComponent } from "antd"

type SkeletonProps = {
	maxWidth?: string
	width?: string
	height?: string
	className?: string
}

export const Skeleton = TypedMemo((props: SkeletonProps) => {
	const { className, height = "100%", maxWidth = "100%", width = "100%" } = props

	return (
		<SkeletonComponent.Image
			active={true}
			style={{
				maxWidth: maxWidth,
				width: width,
				height: height
			}}
			className={className}
		/>
	)
})

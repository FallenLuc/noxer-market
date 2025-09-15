import type { ImgHTMLAttributes, ReactNode } from "react"
import { memo, useCallback, useEffect, useState } from "react"

type AppImageProps = {
	src: string
	alt?: string
	fallback?: ReactNode
	errorFallback?: ReactNode
	testIsLoading?: boolean
	className?: string
} & ImgHTMLAttributes<HTMLImageElement>

export const AppImage = memo<AppImageProps>(props => {
	const {
		className,
		alt = "image",
		errorFallback,
		fallback,
		src,
		testIsLoading = false,
		...otherProps
	} = props

	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		setIsError(false)
	}, [src])

	const onLoadHandler = useCallback(() => {
		setIsLoading(false)
	}, [])

	const onErrorHandler = useCallback(() => {
		setIsLoading(false)
		setIsError(true)
	}, [])

	const showError = isError && !!errorFallback
	const showFallback = !showError && (isLoading || testIsLoading) && !!fallback

	return (
		<>
			{showFallback ? fallback : null}
			{showError ? errorFallback : null}
			<img
				className={className}
				src={src}
				alt={alt}
				onLoad={onLoadHandler}
				onError={onErrorHandler}
				style={{ visibility: showFallback || showError ? "hidden" : undefined }}
				{...otherProps}
			/>
		</>
	)
})

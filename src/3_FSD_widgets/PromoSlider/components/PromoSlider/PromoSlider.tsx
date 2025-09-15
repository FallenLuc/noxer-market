import { TypedMemo } from "@sharedProviders/TypedMemo"
import { AppImage } from "@ui/AppImage"
import { Skeleton } from "@ui/Skeleton"
import { VStack } from "@ui/Stack"
import classNames from "classnames"
import { useMemo } from "react"
import { Link } from "react-router"
import Slider, { type Settings } from "react-slick"
import { promoSliderData } from "../../constant/promoSliderData.constant"
import styles from "./PromoSlider.module.scss"

type PromoSliderProps = {
	className?: string
}

export const PromoSlider = TypedMemo((props: PromoSliderProps) => {
	const { className } = props

	const settings: Settings = useMemo(
		() => ({
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			arrows: false,
			draggable: true,
			lazyLoad: "ondemand",
			autoplay: true,
			swipeToSlide: true,
			slidesToScroll: 1
		}),
		[]
	)

	const fallback = useMemo(() => <Skeleton />, [])

	return (
		<VStack
			className={classNames(className)}
			TagType={"section"}
		>
			<Slider
				{...settings}
				className={styles.slider}
			>
				{promoSliderData.map(item => (
					<Link
						key={item.id}
						to={item.link}
						className={styles.imageWrapper}
					>
						<AppImage
							className={styles.image}
							fallback={fallback}
							errorFallback={fallback}
							src={item.image}
							alt={"promo"}
						/>
					</Link>
				))}
			</Slider>
		</VStack>
	)
})

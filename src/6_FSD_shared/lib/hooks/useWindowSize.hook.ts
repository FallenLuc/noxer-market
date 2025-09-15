import { useEffect, useState } from "react"

export function useWindowSize() {
	const [size, setSize] = useState({
		width: typeof window !== "undefined" ? window.innerWidth : 0,
		height: typeof window !== "undefined" ? window.innerHeight : 0
	})

	useEffect(() => {
		function handleResize() {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight
			})
		}

		window.addEventListener("resize", handleResize)
		// сразу задать начальное значение, на случай, если компонент монтируется позже
		handleResize()

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return size
}

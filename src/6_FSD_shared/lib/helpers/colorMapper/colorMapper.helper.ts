import type { appColorType } from "@customTypes/style.type"

/**
 * Служит для использования системы цветов. Возвращает название css класса, который соответствует переданному цвету.
 * @param {appColorType} color - цвет для которого нужен css класс
 * @returns {string} - название класса.
 */

export function colorMapper(color: appColorType): string {
	switch (color) {
		case "red":
			return "color-red"
		case "dark-opacity-30":
			return "color-dark-opacity-30"
		case "dark":
			return "color-dark"
		case "gray":
			return "color-gray"
		case "medium-light-gray":
			return "color-medium-light-gray"
		case "light-gray":
			return "color-light-gray"
		case "gray-opacity-30":
			return "gray-opacity-30"
		case "gray-opacity-10":
			return "gray-opacity-10"
	}
}

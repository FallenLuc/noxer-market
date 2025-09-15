import type { fontSizeType, fontWeightType } from "@customTypes/style.type"

/**
 * Служит для использования системы шрифтов. Возвращает название класса, которому соответствует размер шрифта
 * @param {fontSizeType} size - размер шрифта
 * @returns {string} - название класса
 */

export function fontSizeMapper(size: fontSizeType): string {
	switch (size) {
		case "xxs":
			return "font-xxs"
		case "xs":
			return "font-xs"
		case "s":
			return "font-s"
		case "m":
			return "font-m"
		case "l":
			return "font-l"
		case "xl":
			return "font-xl"
		case "xxl":
			return "font-xxl"
	}
}

/**
 * Служит для использования системы шрифтов. Возвращает название класса, которому соответствует толщина шрифта.
 * @param {fontWeightType} size - толщина шрифта
 * @returns {string} - название класса
 */

export function fontWeightMapper(size: fontWeightType): string {
	switch (size) {
		case "medium":
			return "font-medium"
		case "medium-fat":
			return "font-medium-fat"
		case "fat":
			return "font-fat"
		case "ultra-fat":
			return "font-ultra-fat"
	}
}

import { UserRole } from '../api/graphql/generated/output'
import { routes } from '../config/routes'
import { FilterType } from '@/features/filter/types'

export const getPercentFromNumber = (
	num: number | undefined,
	total: number
) => {
	if (typeof num === 'undefined') {
		return 0
	}
	const percent = Math.round((num / total) * 100)
	return percent > 100 ? 100 : percent
}

export function createFilter<T extends string>(
	items: T[],
	getText: (item: T) => string
): FilterType[] {
	return items.map(item => ({
		text: getText(item),
		value: item
	}))
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isObjectEmpty = (obj: Record<string, any>): boolean => {
	return Object.values(obj).every(value => {
		if (Array.isArray(value)) return value.length === 0
		if (typeof value === 'object' && value !== null) {
			return isObjectEmpty(value)
		}
		return value === null || value === undefined || value === ''
	})
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const isObjectFilled = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	obj: Record<string, any>,
	ignoreKeys: string[] = []
): boolean => {
	return Object.entries(obj).every(([key, value]) => {
		if (ignoreKeys.includes(key)) {
			return true
		}

		if (Array.isArray(value)) {
			return (
				value.length > 0 &&
				value.every(item => {
					return typeof item === 'object' && item !== null
						? isObjectFilled(item, ignoreKeys)
						: item !== null && item !== undefined && item !== ''
				})
			)
		}

		if (typeof value === 'object' && value !== null) {
			return isObjectFilled(value, ignoreKeys)
		}

		return value !== null && value !== undefined && value !== ''
	})
}
export const getFirstTwoLetters = (text: string) => {
	const arrayText = text.split(' ')

	if (arrayText.length === 1) return text.slice(0, 2)

	const formattedText =
		arrayText[0].slice(0, 1) + arrayText[arrayText.length - 1].slice(0, 1)
	return formattedText.toUpperCase()
}

export const generateTaskLink = (taskId: string, role: UserRole) => {
	return `${routes.base_url}/${role}/tasks/${taskId}`
}

export const generateCourseLink = (courseId: string, role: UserRole) => {
	return `${routes.base_url}/${role}/courses/${courseId}`
}

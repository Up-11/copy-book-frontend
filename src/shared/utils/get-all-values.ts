export const getAllValues = (obj: Record<string, any>): string[] => {
	return Object.values(obj).flatMap(value => {
		if (typeof value === 'function') {
			return []
		}

		if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
			return getAllValues(value)
		}

		return typeof value === 'string' ? value : []
	})
}

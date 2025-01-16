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

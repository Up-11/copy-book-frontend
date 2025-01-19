import { Filters, initialFilters } from '../store/filter.store'
import { useSearchParams } from 'next/navigation'

export const useQueryFilters = () => {
	const searchParams = useSearchParams() as unknown as Map<
		keyof Filters,
		string
	>

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const getFilterValue = (key: keyof Filters, defaultValue: any) => {
		const value = searchParams.get(key)
		return value ? value.split(',') : defaultValue
	}

	// Фильтры из URL
	const filtersFromUrl: Filters = {
		difficulty: getFilterValue('difficulty', initialFilters.difficulty),
		type: getFilterValue('type', initialFilters.type),
		status: getFilterValue('status', initialFilters.status),
		course: getFilterValue('course', initialFilters.course),
		sort: searchParams.get('sort') ?? initialFilters.sort
	}

	return filtersFromUrl
}

import { Filters, initialFilters, useFilterStore } from '../store/filter.store'
import { useQuery, useQueryStore } from '@/common/query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useFilters = () => {
	const filters = useFilterStore(state => state.filters)
	const updateFilter = useFilterStore(state => state.updateFilter)
	const updateAll = useFilterStore(state => state.updateAll)
	const clear = useFilterStore(state => state.clear)
	const setQuery = useQueryStore(state => state.updateQuery)
	const router = useRouter()
	const { getQueryValue } = useQuery()

	const handleCheckboxChange =
		(key: keyof typeof filters) => (value: string) => {
			updateFilter(key, value)
		}

	useEffect(() => {
		setQuery(filters)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filters])

	const filtersFromUrl: Filters = {
		difficulty: getQueryValue('difficulty', initialFilters.difficulty),
		type: getQueryValue('type', initialFilters.type),
		status: getQueryValue('status', initialFilters.status),
		course: getQueryValue('course', initialFilters.course),
		sort: getQueryValue('sort', initialFilters.sort)
	}

	return {
		filters,
		handleCheckboxChange,
		updateAll,
		clear,
		router,
		filtersFromUrl
	}
}

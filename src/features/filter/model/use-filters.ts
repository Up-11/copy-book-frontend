import { initialFilters, useFilterStore } from '../store/filter.store'
import { Filters, InputFilterKeys } from '../types'
import { useQueryManager, useQueryStore } from '@/common/query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDebounceCallback } from 'usehooks-ts'

export const useFilters = () => {
	const filters = useFilterStore(state => state.filters)
	const updateFilter = useFilterStore(state => state.updateFilter)
	const updateAll = useFilterStore(state => state.updateAll)
	const updateFilterRating = useFilterStore(state => state.updateFilterRating)
	const clear = useFilterStore(state => state.clear)
	const setQuery = useQueryStore(state => state.updateQuery)
	const router = useRouter()
	const { getQueryValue } = useQueryManager()

	const handleCheckboxChange =
		(key: keyof typeof filters) => (value: string) => {
			updateFilter(key, value)
		}

	const debouncedUpdate = useDebounceCallback((ratings: number[]) => {
		updateFilterRating(ratings)
	}, 100)

	const updateRating = (ratings: number[]) => {
		debouncedUpdate(ratings)
	}

	const handleInputValue = (value: string, key: InputFilterKeys) => {
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
		sort: getQueryValue('sort', initialFilters.sort),
		aiCompilation: getQueryValue('aiCompilation', initialFilters.aiCompilation),
		ratingFrom: getQueryValue('ratingFrom', initialFilters.ratingFrom),
		ratingTo: getQueryValue('ratingTo', initialFilters.ratingTo)
	}
	useEffect(() => {
		updateAll(filtersFromUrl)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return {
		filters,
		handleCheckboxChange,
		updateAll,
		updateFilter,
		clear,
		router,
		updateRating,
		handleInputValue
	}
}

import { useFilterStore } from '../store/filter.store'
import { useRouter } from 'next/navigation'
import qs from 'qs'
import React, { useEffect } from 'react'

export const useFilters = () => {
	const filters = useFilterStore(state => state.filters)
	const updateFilter = useFilterStore(state => state.updateFilter)
	const updateAll = useFilterStore(state => state.updateAll)
	const clear = useFilterStore(state => state.clear)
	const isMounted = React.useRef(false)
	const router = useRouter()
	const handleCheckboxChange =
		(key: keyof typeof filters) => (value: string) => {
			updateFilter(key, value)
		}

	useEffect(() => {
		if (isMounted.current) {
			const query = qs.stringify(filters, {
				arrayFormat: 'comma'
			})
			router.push(`?${query}`, {
				scroll: false
			})
		}
		isMounted.current = true
	}, [filters, router])

	return {
		filters,
		handleCheckboxChange,
		updateAll,
		clear,
		router
	}
}

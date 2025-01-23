import { RATING_MAX, RATING_MIN } from '../filter.data'
import { Filters, FilterStoreActions } from '../types'
import { create } from 'zustand'

interface IFilterStore extends FilterStoreActions {
	filters: Filters
}

export const initialFilters: Filters = {
	difficulty: [],
	type: [],
	status: [],
	course: [],
	sort: undefined,
	aiCompilation: undefined,
	ratingFrom: undefined,
	ratingTo: undefined
}

export const useFilterStore = create<IFilterStore>(set => ({
	filters: initialFilters,

	updateFilter: (key, value, resetIfMatch = false) =>
		set(state => {
			const current = state.filters[key]

			if (key === 'aiCompilation') {
				return {
					filters: {
						...initialFilters,
						aiCompilation:
							state.filters.aiCompilation === value ? undefined : value
					}
				}
			}

			if (Array.isArray(current)) {
				return {
					filters: {
						...state.filters,
						aiCompilation: initialFilters.aiCompilation,
						[key]: current.includes(value)
							? current.filter(item => item !== value)
							: [...current, value]
					}
				}
			}

			return {
				filters: {
					...state.filters,
					aiCompilation: initialFilters.aiCompilation,
					[key]:
						resetIfMatch && state.filters[key] === value ? undefined : value
				}
			}
		}),

	updateFilterRating: ratings =>
		set(state => {
			const [ratingFrom, ratingTo] = ratings || []

			const shouldResetFilters =
				ratingFrom === RATING_MIN && ratingTo === RATING_MAX

			let newRatingFrom
			if (
				shouldResetFilters ||
				ratingFrom === undefined ||
				ratingFrom.toString() === initialFilters.ratingFrom
			) {
				newRatingFrom = initialFilters.ratingFrom
			} else {
				newRatingFrom = ratingFrom.toString()
			}

			let newRatingTo
			if (
				shouldResetFilters ||
				ratingTo === undefined ||
				ratingTo.toString() === initialFilters.ratingTo
			) {
				newRatingTo = initialFilters.ratingFrom
			} else {
				newRatingTo = ratingTo.toString()
			}

			return {
				filters: {
					...state.filters,
					aiCompilation: initialFilters.aiCompilation,
					ratingFrom: newRatingFrom,
					ratingTo: newRatingTo
				}
			}
		}),
	clear: () => set({ filters: initialFilters }),
	updateAll: (values: Filters) => {
		set(state => ({
			filters: {
				...state.filters,
				...values
			}
		}))
	}
}))

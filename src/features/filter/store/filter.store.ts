import { RATING_MAX, RATING_MIN } from '../filter.data'
import { Filters, FilterStoreActions } from '../types'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

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

const updateRatingValue = (
	value: string | undefined,
	initialValue: string | undefined,
	resetCondition: boolean
): string | undefined => {
	if (resetCondition) {
		return initialValue
	}
	return value !== undefined ? value.toString() : initialValue
}
export const useFilterStore = create<IFilterStore>()(
	devtools(set => ({
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

				const newRatingFrom = updateRatingValue(
					ratingFrom.toString(),
					initialFilters.ratingFrom,
					shouldResetFilters
				)
				const newRatingTo = updateRatingValue(
					ratingTo.toString(),
					initialFilters.ratingTo,
					shouldResetFilters
				)

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
)

import { create } from 'zustand'

export interface Filters {
	difficulty?: string[]
	type?: string[]
	status?: string[]
	course?: string[]
	sort?: string
	aiCompilation?: string
}

interface IFilterStore {
	filters: Filters
	updateFilter: (
		key: keyof Filters,
		value: string,
		resetIfMatch?: boolean
	) => void
	clear: () => void
	updateAll: (valuse: Filters) => void
}

export const initialFilters: Filters = {
	difficulty: [],
	type: [],
	status: [],
	course: [],
	sort: undefined,
	aiCompilation: undefined
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

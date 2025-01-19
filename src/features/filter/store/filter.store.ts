import { create } from 'zustand'

export interface Filters {
	difficulty: string[]
	type: string[]
	status: string[]
	course: string[]
	sort: string | undefined
}

interface IFilterStore {
	filters: Filters
	updateFilter: (key: keyof Filters, value: string) => void
	clear: () => void
	updateAll: (valuse: Filters) => void
}

export const initialFilters: Filters = {
	difficulty: [],
	type: [],
	status: [],
	course: [],
	sort: undefined
}

export const useFilterStore = create<IFilterStore>(set => ({
	filters: initialFilters,
	updateFilter: (key, value) =>
		set(state => {
			const current = state.filters[key]

			if (Array.isArray(current)) {
				return {
					filters: {
						...state.filters,
						[key]: current.includes(value)
							? current.filter(item => item !== value)
							: [...current, value]
					}
				}
			}

			return {
				filters: {
					...state.filters,
					[key]: state.filters.sort === value ? undefined : value
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

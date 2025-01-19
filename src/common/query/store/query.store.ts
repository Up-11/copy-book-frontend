import { Filters } from '@/features/filter/store/filter.store'
import { create } from 'zustand'

export type Query = Record<string, string | string[] | undefined> &
	Partial<Filters>

export interface IQueryStore {
	query: Query
	updateQuery: (
		queryObject:
			| Record<string, string | string[] | undefined>
			| Partial<Filters>
	) => void
}

export const useQueryStore = create<IQueryStore>(set => ({
	query: {},
	updateQuery: queryObject =>
		set(state => ({
			query: { ...state.query, ...queryObject }
		}))
}))

export interface FilterType {
	text: string
	value: string
	icon?: React.ReactNode
}

export interface FilterStoreActions {
	updateFilter: (
		key: keyof Filters,
		value: string,
		resetIfMatch?: boolean
	) => void
	clear: () => void
	updateFilterRating: (ratings: number[] | undefined) => void
	updateAll: (valuse: Filters) => void
}

export interface Filters {
	difficulty?: string[]
	type?: string[]
	status?: string[]
	course?: string[]
	sort?: string
	aiCompilation?: string
	ratingFrom?: number
	ratingTo?: number
}

export type InputFilterKeys = Extract<
	keyof Filters,
	'ratingFrom' | 'ratingTo' | 'sort'
>

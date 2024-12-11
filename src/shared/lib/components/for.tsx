export interface ForProps<T> {
	/**
	 * The array to iterate over
	 */
	each: T[] | readonly T[] | undefined
	/**
	 * The fallback content to render when the array is empty
	 */
	fallback?: React.ReactNode
	/**
	 * The render function to render each item in the array
	 */
	children: (item: Exclude<T, undefined>, index: number) => React.ReactNode
}

export function For<T extends string | number | undefined>(
	props: ForProps<T>
): React.ReactNode {
	const { each, fallback, children } = props

	if (each?.length === 0) {
		return fallback || null
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return each?.map(children as any)
}

import { Query, useQueryStore } from '../store/query.store'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'qs'
import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'

export const useQueryManager = () => {
	const query = useQueryStore(state => state.query)
	const router = useRouter()
	const isMounted = useRef(false)
	const searchParams = useSearchParams()

	const getQueryValueFromParams = <T extends keyof Query>(
		key: T,
		defaultValue: Query[T]
	): Query[T] => {
		const value = searchParams.get(key)

		if (!value) {
			return defaultValue
		}

		if (Array.isArray(defaultValue)) {
			return value.split(',') as Query[T]
		}

		return value as Query[T]
	}

	const queriesArray = Object.keys(query)

	useIsomorphicLayoutEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify(query, {
				arrayFormat: 'comma',
				sort: (a: string, b: string) => {
					return queriesArray.indexOf(a) - queriesArray.indexOf(b)
				}
			})
			router.push(`?${queryString}`, { scroll: false })
		}
		isMounted.current = true
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query, router])

	return { getQueryValue: getQueryValueFromParams }
}

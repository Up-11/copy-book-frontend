import { Query, useQueryStore } from '../store/query.store'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'qs'
import { useEffect, useRef } from 'react'

export const useQuery = () => {
	const query = useQueryStore(state => state.query)
	const router = useRouter()
	const isMounted = useRef(false)
	const searchParams = useSearchParams()

	const getQueryValue = <T extends keyof Query>(
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

	useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify(query, {
				arrayFormat: 'comma',
				sort: (a: string, b: string) => {
					return queriesArray.indexOf(b) - queriesArray.indexOf(a)
				}
			})
			router.push(`?${queryString}`, { scroll: false })
		}
		isMounted.current = true
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query, router])

	return { getQueryValue, query }
}

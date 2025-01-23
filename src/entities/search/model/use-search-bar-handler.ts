import { useQueryManager } from '@/common/query'
import { useEffect, useState } from 'react'
import { useDebounceCallback } from 'usehooks-ts'

export const useSearchBarHandler = () => {
	const { getQueryValue, updateQuery: setQuery } = useQueryManager()
	const [value, setValue] = useState<string>('')

	useEffect(() => {
		const initialQuery = getQueryValue('searchQuery', '') as string
		setQuery({ searchQuery: initialQuery || undefined })
		setValue(initialQuery)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const updateQueryDebounced = useDebounceCallback((query: string) => {
		setQuery({ searchQuery: query || undefined })
	}, 300)

	const handleInputChange = (newValue: string) => {
		setValue(newValue)
		updateQueryDebounced(newValue)
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleInputChange(event.target.value)
	}

	const clearInput = () => {
		handleInputChange('')
	}

	return { value, clearInput, handleChange }
}

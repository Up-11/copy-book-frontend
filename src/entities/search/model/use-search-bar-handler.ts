import { useQueryManager, useQueryStore } from '@/common/query'
import { useEffect, useState } from 'react'
import { useDebounceCallback } from 'usehooks-ts'

export const useSearchBarHandler = () => {
	const { getQueryValue } = useQueryManager()
	const [value, setValue] = useState<string>('')

	const setQuery = useQueryStore(state => state.updateQuery)

	useEffect(() => {
		setQuery({ searchQuery: getQueryValue('searchQuery', '') })
		setValue(getQueryValue('searchQuery', '') as string)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const updateQueryDebounced = useDebounceCallback((query: string) => {
		setQuery({ searchQuery: query })
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

import { useQueryManager } from '@/common/query'
import { useEffect, useState } from 'react'
import { useDebounceCallback } from 'usehooks-ts'

interface UseSearchBarHandlerProps {
	value?: string
	onChange?: (value: string) => void
}

export const useSearchBarHandler = (props?: UseSearchBarHandlerProps) => {
	const { getQueryValue, updateQuery: setQuery } = useQueryManager()

	const [internalValue, setInternalValue] = useState<string>('')

	const value = props?.value !== undefined ? props?.value : internalValue

	useEffect(() => {
		const initialQuery = getQueryValue('searchQuery', '') as string
		const initialValue = initialQuery || ''

		if (props?.onChange) {
			props.onChange(initialValue)
		} else {
			setInternalValue(initialValue)
		}
		setQuery({ searchQuery: initialValue || undefined })
	}, [])

	const updateQueryDebounced = useDebounceCallback((query: string) => {
		setQuery({ searchQuery: query || undefined })
	}, 300)

	const handleInputChange = (newValue: string) => {
		if (props?.onChange) {
			props.onChange(newValue)
		} else {
			setInternalValue(newValue)
		}
		updateQueryDebounced(newValue)
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleInputChange(event.target.value)
	}

	const clearInput = () => {
		handleInputChange('')
	}

	return {
		value,
		clearInput,
		handleChange,
		handleInputChange
	}
}

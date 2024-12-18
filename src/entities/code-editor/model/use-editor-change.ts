import { useState } from 'react'

export const useEditorChange = (
	code: string | undefined,
	onChange: (action: string, data: string | undefined) => void
) => {
	const [value, setValue] = useState<string | undefined>(code || '')

	const handleEditorChange = (value: string | undefined) => {
		setValue(value)
		onChange('code', value)
	}

	return { value, handleEditorChange }
}

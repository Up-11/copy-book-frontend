import useDebounce from '@/shared/lib/hooks/use-debounce'
import { useCodeEditor } from '../store/code-editor.store'

export const useSearch = () => {
	const searchTerm = useCodeEditor(state => state.searchTerm)
	const setSearchTerm = useCodeEditor(state => state.setSearchTerm)

	const debouncedSearchTerm = useDebounce(searchTerm, 500)

	return { debouncedSearchTerm, setSearchTerm }
}

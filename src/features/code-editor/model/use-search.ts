import useDebounce from '@/shared/lib/hooks/use-debounce'
import { useCodeEditorStore } from '../store/code-editor.store'

export const useSearch = () => {
	const searchTerm = useCodeEditorStore(state => state.searchTerm)
	const setSearchTerm = useCodeEditorStore(state => state.setSearchTerm)

	const debouncedSearchTerm = useDebounce(searchTerm, 500)

	return { debouncedSearchTerm, setSearchTerm }
}

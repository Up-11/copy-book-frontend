import { useCodeEditorStore } from '../store/code-editor.store'

export const useCode = () => {
	const code = useCodeEditorStore(state => state.code)
	const setCode = useCodeEditorStore(state => state.setCode)
	const language = useCodeEditorStore(state => state.language)
	const onChange = (action: string, data: string | undefined) => {
		switch (action) {
			case 'code':
				setCode(data)
				break
			default: {
				console.warn('case not handled!', action, data)
			}
		}
	}

	return { code, onChange, language }
}

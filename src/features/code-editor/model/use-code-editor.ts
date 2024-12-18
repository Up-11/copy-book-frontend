import { useCodeEditor } from '../store/code-editor.store'

export const useCode = () => {
	const code = useCodeEditor(state => state.code)
	const setCode = useCodeEditor(state => state.setCode)
	const language = useCodeEditor(state => state.language)
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

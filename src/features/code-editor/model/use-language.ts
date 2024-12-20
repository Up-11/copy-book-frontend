import { languageOptions } from '../lib/constants/language-options'
import { useCodeEditorStore } from '../store/code-editor.store'
import { languageOptionsType } from '../types'

export const useLanguage = () => {
	const language = useCodeEditorStore(state => state.language)
	const setLanguage = useCodeEditorStore(state => state.setLanguage)

	const setLanguageHandler = (language: languageOptionsType) => {
		console.log('setLanguageHandler', language)
		setLanguage(language)
	}

	const updatedLanguageOptions = languageOptions.map(item => ({
		...item,
		isActive: item.id === language.id
	}))

	return {
		language,
		setLanguage: setLanguageHandler,
		updatedLanguageOptions
	}
}

import { languageOptions } from '../lib/constants/language-options'
import { useCodeEditor } from '../store/code-editor.store'
import { languageOptionsType } from '../types'

export const useLanguage = () => {
	const language = useCodeEditor(state => state.language)
	const setLanguage = useCodeEditor(state => state.setLanguage)

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

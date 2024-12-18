import { create } from 'zustand'
import { javascriptDefault } from '../lib/constants/constants'
import { languageOptions } from '../lib/constants/language-options'
import { languageOptionsType } from '../types'

interface ICodeEditorStore {
	code: string | undefined
	language: languageOptionsType
	searchTerm: string
	setSearchTerm: (value: string) => void
	setLanguage: (language: languageOptionsType) => void
	setCode: (value: string | undefined) => void
}

export const useCodeEditor = create<ICodeEditorStore>(set => ({
	code: javascriptDefault,
	language: languageOptions[0],
	searchTerm: '',
	setSearchTerm: (value: string) => set({ searchTerm: value }),
	setLanguage: (language: languageOptionsType) => set({ language }),
	setCode: value => set({ code: value })
}))

import { create } from 'zustand'
import { javascriptDefault } from '../lib/constants/constants'
import { languageOptions } from '../lib/constants/language-options'
import { languageOptionsType } from '../types'

type ICodeEditorState = {
	code: string | undefined
	language: languageOptionsType
	searchTerm: string
}

type ICodeEditorActions = {
	setSearchTerm: (value: string) => void
	setLanguage: (language: languageOptionsType) => void
	setCode: (value: string | undefined) => void
}

type ICodeEditorStore = ICodeEditorState & ICodeEditorActions

const initialState: ICodeEditorState = {
	code: javascriptDefault,
	language: languageOptions[0],
	searchTerm: ''
}

export const useCodeEditorStore = create<ICodeEditorStore>(set => ({
	...initialState,
	setSearchTerm: (value: string) => set({ searchTerm: value }),
	setLanguage: (language: languageOptionsType) => set({ language }),
	setCode: value => set({ code: value })
}))

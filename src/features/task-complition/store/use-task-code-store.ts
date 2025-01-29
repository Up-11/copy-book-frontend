import { javascriptDefault, languageOptions } from '@/features/code-editor'
import {
	languageOptionsType,
	OutputDetails,
	OutputDetailsNullable
} from '@/features/code-editor/types'
import { create } from 'zustand'

type ICodeEditorState = {
	taskCode: string | undefined
	language: languageOptionsType
	isProcessing: boolean
	outputDetails: OutputDetailsNullable
}

type ICodeEditorActions = {
	setCode: (value: string | undefined) => void
	setOutputDetails: (value: OutputDetails) => void
	setIsProcessing: (value: boolean) => void
}

type ICodeEditorStore = ICodeEditorState & ICodeEditorActions

const initialState: ICodeEditorState = {
	taskCode: javascriptDefault,
	language: languageOptions[0],
	isProcessing: false,
	outputDetails: null
}

export const useTaskCodeStore = create<ICodeEditorStore>(set => ({
	...initialState,
	setCode: value => set({ taskCode: value }),
	setOutputDetails: value => set({ outputDetails: value }),
	setIsProcessing: value => set({ isProcessing: value })
}))

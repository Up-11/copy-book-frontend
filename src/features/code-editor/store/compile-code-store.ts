import { create } from 'zustand'

interface ICompileCodeStore {
	isProcessing: boolean
	outputDetails: string
	setOutputDetails: (value: string) => void
	setIsProcessing: (value: boolean) => void
}

export const useCompileCodeStore = create<ICompileCodeStore>(set => ({
	isProcessing: false,
	outputDetails: '',
	setOutputDetails: value => set({ outputDetails: value }),
	setIsProcessing: value => set({ isProcessing: value })
}))

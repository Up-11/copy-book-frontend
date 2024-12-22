import { OutputDetails, OutputDetailsNullable } from '../types'
import { create } from 'zustand'

interface ICompileCodeStore {
	isProcessing: boolean
	outputDetails: OutputDetailsNullable
	setOutputDetails: (value: OutputDetails) => void
	setIsProcessing: (value: boolean) => void
}

export const useCompileCodeStore = create<ICompileCodeStore>(set => ({
	isProcessing: false,
	outputDetails: null,
	setOutputDetails: value => set({ outputDetails: value }),
	setIsProcessing: value => set({ isProcessing: value })
}))

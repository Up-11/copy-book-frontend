import { useTaskCodeStore } from '../store/use-task-code-store'
import { CompileCodeService } from '@/features/code-editor'

export const useCodeTask = () => {
	const setCode = useTaskCodeStore(state => state.setCode)
	const code = useTaskCodeStore(state => state.taskCode)
	const lang = useTaskCodeStore(state => state.language)
	const isPending = useTaskCodeStore(state => state.isProcessing)
	const setIsProcessing = useTaskCodeStore(state => state.setIsProcessing)
	const setOutputDetails = useTaskCodeStore(state => state.setOutputDetails)
	const outputDetails = useTaskCodeStore(state => state.outputDetails)
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

	const { fetchCompileCode: handleCompileCode } = CompileCodeService({
		code,
		language: lang,
		setIsProcessing,
		setOutputDetails
	})
	return {
		handleCompileCode,
		isPending,
		onChange,
		outputDetails,
		code,
		lang
	}
}

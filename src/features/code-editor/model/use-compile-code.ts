import { CompileCodeService } from '../api/compile-code.service'
import { useCodeEditorStore } from '../store/code-editor.store'
import { useCompileCodeStore } from '../store/compile-code-store'

export const useCompileCode = () => {
	const language = useCodeEditorStore(state => state.language)
	const code = useCodeEditorStore(state => state.code)
	const setIsProcessing = useCompileCodeStore(state => state.setIsProcessing)
	const setOutputDetails = useCompileCodeStore(state => state.setOutputDetails)

	const { fetchCompileCode: handleCompileCode } = CompileCodeService({
		language,
		code,
		setIsProcessing,
		setOutputDetails
	})

	return { handleCompileCode }
}

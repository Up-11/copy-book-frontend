import { API_REDIS_CONFIG } from '../lib/constants/constants'
import { encodeCode } from '../lib/utils'
import { useCodeEditorStore } from '../store/code-editor.store'
import { useCompileCodeStore } from '../store/compile-code-store'
import axios from 'axios'
import { toast } from 'sonner'

export const useCompileCode = () => {
	const language = useCodeEditorStore(state => state.language)
	const code = useCodeEditorStore(state => state.code)
	const setIsProcessing = useCompileCodeStore(state => state.setIsProcessing)
	const setOutputDetails = useCompileCodeStore(state => state.setOutputDetails)
	//TODO добавить типизацию и в целом чуть почистить код

	const checkStatus = async (token: string) => {
		const options = {
			method: 'GET',
			url: API_REDIS_CONFIG.url + '/' + token,
			params: { base64_encoded: 'true', fields: '*' },
			headers: {
				'X-RapidAPI-Host': API_REDIS_CONFIG.host,
				'X-RapidAPI-Key': API_REDIS_CONFIG.key
			}
		}
		try {
			const response = await axios.request(options)
			const statusId = response.data.status?.id

			if (statusId === 1 || statusId === 2) {
				checkStatus(token)
				return
			} else {
				setIsProcessing(false)
				setOutputDetails(response.data)
				return
			}
		} catch (err) {
			toast.error(`Ошибка при компиляции кода. ${err}`)
			setIsProcessing(false)
		}
	}

	const handleCompileCode = () => {
		setIsProcessing(true)
		const formData = {
			language_id: language.id,
			source_code: encodeCode(code || '')
		}
		const options = {
			method: 'POST',
			url: API_REDIS_CONFIG.url,
			params: { base64_encoded: 'true', fields: '*' },
			headers: {
				'content-type': 'application/json',
				'Content-type': 'application/json',
				'X-RapidAPI-Host': API_REDIS_CONFIG.host,
				'X-RapidAPI-Key': API_REDIS_CONFIG.key
			},
			data: formData
		}

		axios
			.request(options)
			.then(response => {
				const token = response.data.token
				checkStatus(token)
			})
			.catch(error => {
				const err = error.response ? error.response.data : error
				setIsProcessing(false)
				toast.error(err)
			})
	}

	return { handleCompileCode }
}

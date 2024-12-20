import { useCodeEditorStore } from '../store/code-editor.store'
import { useCompileCodeStore } from '../store/compile-code-store'
import axios from 'axios'

export const useCompileCode = () => {
	const language = useCodeEditorStore(state => state.language)
	const code = useCodeEditorStore(state => state.code)
	const setIsProcessing = useCompileCodeStore(state => state.setIsProcessing)
	const setOutputDetails = useCompileCodeStore(state => state.setOutputDetails)
	//TODO добавить типизацию и в целом чуть почистить код

	const checkStatus = async (token: string) => {
		const options = {
			method: 'GET',
			url: process.env.NEXT_PUBLIC_RAPID_API_URL + '/' + token,
			params: { base64_encoded: 'true', fields: '*' },
			headers: {
				'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
				'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY
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
				console.log('response.data', response.data)
				return
			}
		} catch (err) {
			console.log('err', err)
			setIsProcessing(false)
		}
	}

	const handleCompileCode = () => {
		setIsProcessing(true)
		const formData = {
			language_id: language.id,
			source_code: btoa(code || '')
		}
		const options = {
			method: 'POST',
			url: process.env.NEXT_PUBLIC_RAPID_API_URL,
			params: { base64_encoded: 'true', fields: '*' },
			headers: {
				'content-type': 'application/json',
				'Content-type': 'application/json',
				'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
				'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY
			},
			data: formData
		}

		axios
			.request(options)
			.then(response => {
				console.log('res data', response.data)
				const token = response.data.token
				checkStatus(token)
			})
			.catch(error => {
				const err = error.response ? error.response.data : error
				setIsProcessing(false)
				console.log(err)
			})
	}

	return { handleCompileCode }
}

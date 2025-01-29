import { API_REDIS_CONFIG } from '../lib/constants/constants'
import { encodeCode } from '../lib/utils'
import { languageOptionsType, OutputDetails } from '../types'
import axios from 'axios'
import { toast } from 'sonner'

const headers = {
	'content-type': 'application/json',
	'X-RapidAPI-Host': API_REDIS_CONFIG.host,
	'X-RapidAPI-Key': API_REDIS_CONFIG.key
}

export const CompileCodeService = ({
	code,
	language,
	setIsProcessing,
	setOutputDetails
}: {
	code: string | undefined
	language: languageOptionsType
	setIsProcessing: (value: boolean) => void
	setOutputDetails: (value: OutputDetails) => void
}) => {
	const checkStatus = async (token: string) => {
		try {
			const options = {
				method: 'GET',
				url: `${API_REDIS_CONFIG.url}/${token}`,
				params: { base64_encoded: 'true', fields: '*' },
				headers
			}

			const response = await axios.request(options)
			const statusId = response.data.status?.id

			if (statusId === 1 || statusId === 2) {
				setTimeout(() => checkStatus(token), 1000)
			} else {
				setIsProcessing(false)
				setOutputDetails(response.data)
			}
		} catch (err) {
			toast.error(`Ошибка при компиляции кода: ${err}`)
			setIsProcessing(false)
		}
	}

	const fetchCompileCode = async () => {
		try {
			setIsProcessing(true)
			const formData = {
				language_id: language.id,
				source_code: encodeCode(code || '')
			}

			const options = {
				method: 'POST',
				url: API_REDIS_CONFIG.url,
				params: { base64_encoded: 'true', fields: '*' },
				headers,
				data: formData
			}

			const response = await axios.request(options)
			const token = response.data.token
			await checkStatus(token)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			const err = error.response ? error.response.data : error
			toast.error(`Ошибка при компиляции: ${err}`)
			setIsProcessing(false)
		}
	}

	return { fetchCompileCode }
}

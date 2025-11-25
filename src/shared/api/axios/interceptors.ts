import axios from 'axios'

export const getContentType = () => ({
	'Content-Type': 'application/json'
})

export const publicAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: getContentType()
})

export const privateAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: getContentType()
})

privateAxios.interceptors.request.use(config => {
	config.withCredentials = true
	return config
})

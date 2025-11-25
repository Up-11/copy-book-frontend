import { privateAxios } from '../axios/interceptors'

const API_URL = process.env.NEXT_PUBLIC_API_URL + '/upload'

export interface IAvatarUploadResponse {
	fileName: string
}

export const UploadService = {
	async uploadAvatar(file: FormData) {
		return privateAxios.post<IAvatarUploadResponse>(
			API_URL + '/upload-avatar',
			file,
			{
				headers: { 'Content-Type': 'multipart/form-data' }
			}
		)
	}
}

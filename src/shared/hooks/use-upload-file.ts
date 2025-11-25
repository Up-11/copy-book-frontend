import { UploadService } from '../api/services/upload.service'
import { useMutation } from './use-mutation'
import { toast } from 'sonner'

export const useUploadFile = (onSuccess?: () => void) => {
	const { mutate, isLoading, data } = useMutation({
		mutationFn: (data: FormData) => UploadService.uploadAvatar(data),
		onSuccess: () => {
			onSuccess?.()
			toast.success('Файлы успешно загружены')
		},
		onError: e => {
			toast.error(e.message)
		}
	})

	const uploadFile = async (file: File) => {
		console.log(file)
		try {
			const formData = new FormData()
			formData.append('avatar', file)
			mutate(formData)
		} catch (e) {
			console.log(e)
		}
	}
	return { uploadFile, isLoading }
}

import z from 'zod'

const createFileUploadSchema = (
	options: {
		maxSize?: number
		allowedTypes?: string[]
		required?: boolean
	} = {}
) => {
	const { maxSize = 5 * 1024 * 1024, allowedTypes, required = true } = options

	const baseFileValidator = z
		.instanceof(File)
		.refine(
			file => file.size <= maxSize,
			`Размер файла не должен превышать ${Math.round(maxSize / (1024 * 1024))} МБ`
		)
		.refine(
			file => {
				if (!allowedTypes || allowedTypes.length === 0) return true
				const extension = file.name.toLowerCase().split('.').pop()
				return allowedTypes.some(type => type.toLowerCase() === extension)
			},
			`Разрешены только: ${allowedTypes?.join(', ') || 'все файлы'}`
		)

	const fileField = required
		? { file: baseFileValidator }
		: { file: baseFileValidator.optional() }

	return z.object(fileField)
}

export const avatarUploadSchema = createFileUploadSchema({
	maxSize: 10 * 1024 * 1024,
	allowedTypes: ['jpg', 'jpeg', 'png', 'webp', 'gif']
})

export type TypeAvatarUploadSchema = z.infer<typeof avatarUploadSchema>

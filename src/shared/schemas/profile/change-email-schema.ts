import { z } from 'zod'

export const changeEmailSchema = z.object({
	newEmail: z
		.string()
		.email('Некорректный формат email')
		.min(1, 'Email обязателен')
})

export type TypeChangeEmailSchema = z.infer<typeof changeEmailSchema>

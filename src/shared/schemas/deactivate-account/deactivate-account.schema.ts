import { z } from 'zod'

export const deactivateAccountSchema = z.object({
	email: z
		.string()
		.email('Некорректный формат email')
		.min(1, 'Email обязателен'),
	password: z.string().min(1, 'Пароль обязателен'),
	token: z
		.string()
		.length(6, 'Код должен содержать 6 символов')
		.regex(/^\d+$/, 'Код должен содержать только цифры')
})

export type TypeDeactivateAccountSchema = z.infer<
	typeof deactivateAccountSchema
>

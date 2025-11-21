import { z } from 'zod'

export const step1Schema = z.object({
	email: z
		.string()
		.email('Некорректный формат email')
		.min(1, 'Email обязателен')
})

export const step2Schema = z.object({
	code: z.string().length(6, 'Код должен содержать 6 символов')
})

export const step3Schema = z
	.object({
		newPassword: z
			.string()
			.min(6, 'Пароль должен содержать минимум 6 символов')
			.max(50, 'Пароль слишком длинный'),
		confirmPassword: z.string().min(1, 'Подтверждение пароля обязательно')
	})
	.refine(data => data.newPassword === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword']
	})

export type TypeStep1Form = z.infer<typeof step1Schema>
export type TypeStep2Form = z.infer<typeof step2Schema>
export type TypeStep3Form = z.infer<typeof step3Schema>

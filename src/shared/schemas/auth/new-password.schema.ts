import z from 'zod'

export const newPasswordSchema = z
	.object({
		currentPassword: z.string().min(1, 'Текущий пароль обязателен'),
		newPassword: z.string().min(4, 'Пароль должен содержать минимум 4 символа'),
		confirmPassword: z.string()
	})
	.refine(data => data.newPassword === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword']
	})

export type TypeNewPasswordSchema = z.infer<typeof newPasswordSchema>

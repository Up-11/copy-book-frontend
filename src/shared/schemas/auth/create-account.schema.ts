import { UserRole } from '@/shared/graphql/generated/output'
import { z } from 'zod'

export const createAccountSchema = z
	.object({
		email: z
			.string()
			.email('Некорректный формат email')
			.min(3, 'Email должен содержать минимум 3 символа'),
		firstName: z.string().min(3, 'Имя должно содержать минимум 3 символа'),
		lastName: z.string().min(3, 'Фамилия должна содержать минимум 3 символа'),
		password: z.string().min(4, 'Пароль должен содержать минимум 4 символа'),
		passwordRepeat: z
			.string()
			.min(4, 'Повторный пароль должен содержать минимум 4 символа'),
		role: z.enum(UserRole)
	})
	.refine(data => data.password === data.passwordRepeat, {
		message: 'Пароли не совпадают',
		path: ['passwordRepeat']
	})

export type TypeCreateAccountSchema = z.infer<typeof createAccountSchema>

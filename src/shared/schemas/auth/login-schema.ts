import { UserRole } from '@/shared/graphql/generated/output'
import { z } from 'zod'

export const loginSchema = z.object({
	email: z
		.string()
		.email('Некорректный формат email')
		.min(3, 'Email должен содержать минимум 3 символа'),
	password: z.string().min(4, 'Пароль должен содержать минимум 4 символа'),
	role: z.enum(UserRole)
})

export type TypeLoginSchema = z.infer<typeof loginSchema>

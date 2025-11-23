import { z } from 'zod'

export const personalDataSchema = z.object({
	email: z
		.string()
		.email('Некорректный формат email')
		.min(3, 'Email должен содержать минимум 3 символа')
		.max(100, 'Email не должен превышать 100 символов')
		.trim(),

	firstName: z
		.string()
		.min(3, 'Имя должно содержать минимум 3 символа')
		.max(50, 'Имя не должно превышать 50 символов')
		.trim()
		.regex(/^[a-zA-Zа-яА-ЯёЁ\s\-]+$/, 'Имя может содержать только буквы'),

	lastName: z
		.string()
		.min(3, 'Фамилия должна содержать минимум 3 символа')
		.max(50, 'Фамилия не должна превышать 50 символов')
		.trim()
		.regex(/^[a-zA-Zа-яА-ЯёЁ\s\-]+$/, 'Фамилия может содержать только буквы'),

	avatar: z
		.string()
		.url('Некорректный URL аватара')
		.optional()
		.or(z.literal('')),

	bio: z
		.string()
		.max(500, 'Биография не должна превышать 500 символов')
		.optional()
		.or(z.literal(''))
})

export type TypePersonalDataSchema = z.infer<typeof personalDataSchema>

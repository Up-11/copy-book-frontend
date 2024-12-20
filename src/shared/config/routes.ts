export const routes = {
	// Основные маршруты
	home: '/',

	// Аутентификация
	auth: {
		student: '/auth/student',
		teacher: '/auth/teacher',
		admin: '/auth/admin',
		reset: '/auth/reset-password'
	},

	// Дашборды
	dashboard: {
		student: '/student',
		teacher: '/teacher',
		admin: '/admin'
	},

	// Редактор кода
	code: {
		sandbox: '/code/sandbox',
		editor: '/code/editor'
	}
} as const

// Типизация
export type AppRoutes = typeof routes

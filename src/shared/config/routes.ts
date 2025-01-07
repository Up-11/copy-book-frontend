export const routes = {
	// Основные маршруты
	home: '/',
	profile: {
		personal: '/profile/personal',
		settings: '/profile/settings',
		statistic: '/profile/statistic'
	},

	// Аутентификация
	auth: {
		student: '/auth/student',
		teacher: '/auth/teacher',
		admin: '/auth/admin',
		reset: '/auth/reset-password'
	},

	dashboard: {
		student: '/student/dashboard',
		teacher: '/teacher/dashboard',
		admin: '/admin/dashboard'
	},

	// Редактор кода
	code: {
		sandbox: '/code/sandbox',
		drafts: '/code/drafts'
	}
} as const

export type AppRoutes = typeof routes

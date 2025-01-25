export const routes = {
	home: '/',
	profile: {
		personal: '/profile/personal',
		settings: '/profile/settings',
		statistic: '/profile/statistic'
	},

	auth: {
		student: '/auth/student',
		teacher: '/auth/teacher',
		admin: '/auth/admin',
		reset: '/auth/reset-password'
	},

	tasks: {
		student: '/student/tasks',
		main: '/all-tasks',
		currentUserTask: (id: string) => {
			return `/student/tasks/${id}`
		}
	},
	course: {
		student: '/student/courses',
		main: '/all-courses',
		currentUserCourse: (id: string) => {
			return `/student/courses/${id}`
		},
		complitionCourse: (courseId: string, chapterId: string) => {
			return `/course-complition/${courseId}/chapter/${chapterId}`
		}
	},

	dashboard: {
		student: '/student/dashboard',
		teacher: '/teacher/dashboard',
		admin: '/admin/dashboard'
	},

	code: {
		sandbox: '/code/sandbox',
		drafts: '/student/drafts'
	}
} as const

export type AppRoutes = typeof routes

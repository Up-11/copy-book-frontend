export const routes = {
	base_url: 'http://localhost:3000',
	home: '/',
	calendar: '/calendar',
	journal: '/journal',

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
		teacher: {
			tasks: '/teacher/tasks',
			create: '/teacher/tasks/create'
		},
		main: '/all-tasks',
		currentUserTask: (id: string) => {
			return `/student/tasks/${id}`
		},
		complitionTask: (taskId: string) => {
			return `/task-complition/${taskId}`
		}
	},
	course: {
		student: '/student/courses',
		teacher: {
			courses: '/teacher/courses',
			create: '/teacher/courses/create'
		},
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
	teacher: {
		messages: '/teacher/messages'
	},
	code: {
		sandbox: '/code/sandbox',
		drafts: '/student/drafts'
	}
} as const

export type AppRoutes = typeof routes

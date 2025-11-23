import { UserRole } from '../graphql/generated/output'
import { getAllValues } from '../utils/get-all-values'

export const routes = {
	base_url: 'http://localhost:3000',
	home: '/',
	calendar: '/calendar',
	journal: '/journal',

	profile: {
		personal: '/profile/personal',
		settings: '/profile/settings',
		statistic: '/profile/statistic',
		security: '/profile/security',
		logout: '/profile/logout',
		accountInfo: '/profile/account-info',
		notifications: '/profile/notifications',
		history: '/profile/history',
		support: '/profile/support'
	},
	auth: {
		student: '/auth/student',
		teacher: '/auth/teacher',
		admin: '/auth/admin',
		reset: '/auth/reset-password',
		verifyEmail: '/auth/verify-email',
		deactivated: '/auth/deactivated'
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

export const dynamicRoutePatterns = {
	course: {
		currentUserCourse: '/student/courses/:id',
		complitionCourse: '/course-complition/:courseId/chapter/:chapterId'
	},
	tasks: {
		currentUserTask: '/student/tasks/:id',
		complitionTask: '/task-complition/:id'
	}
}

const routeValues = getAllValues(routes)
const dynamicRoutePatternsValues = getAllValues(dynamicRoutePatterns)

export const unAuthorizedRoutes: string[] = [
	routes.auth.student,
	routes.auth.teacher,
	routes.auth.admin,
	routes.auth.reset,
	routes.code.sandbox,
	routes.auth.verifyEmail,
	routes.auth.deactivated,
	routes.home
]

export const authorizedRoutes: string[] = routeValues
	.filter(route => !unAuthorizedRoutes.includes(route))
	.concat(dynamicRoutePatternsValues)

export const studentRoutes = [
	routes.dashboard.student,
	routes.tasks.student,
	routes.course.student,
	routes.code.drafts,
	dynamicRoutePatterns.course.complitionCourse,
	dynamicRoutePatterns.course.currentUserCourse,
	dynamicRoutePatterns.tasks.complitionTask,
	dynamicRoutePatterns.tasks.currentUserTask
]

export const teacherRoutes = [
	routes.dashboard.teacher,
	routes.tasks.teacher.tasks,
	routes.tasks.teacher.create,
	routes.course.teacher.courses,
	routes.course.teacher.create,
	routes.teacher.messages
]

export const commonRoutes = [
	routes.profile.accountInfo,
	routes.profile.history,
	routes.profile.logout,
	routes.profile.notifications,
	routes.profile.personal,
	routes.profile.security,
	routes.profile.settings,
	routes.profile.statistic,
	routes.profile.support,
	routes.auth.deactivated,

	routes.calendar,
	routes.journal
]

export const adminRoutes = [routes.dashboard.admin]

export const getDashboardRoute = (role: UserRole) => {
	switch (role) {
		case UserRole.Student:
			return routes.dashboard.student
		case UserRole.Teacher:
			return routes.dashboard.teacher
		case UserRole.Admin:
			return routes.dashboard.admin
		default:
			return routes.home
	}
}

export const hasRoleAccess = (role: UserRole, pathname: string): boolean => {
	const routeList =
		{
			[UserRole.Student]: studentRoutes,
			[UserRole.Teacher]: teacherRoutes,
			[UserRole.Admin]: adminRoutes
		}[role] || []

	const isCommonRoute = commonRoutes.some(
		route => pathname === route || pathname.startsWith(route + '/')
	)
	if (isCommonRoute) return true

	const hasAccess = routeList.some(
		route => pathname === route || pathname.startsWith(route + '/')
	)

	if (hasAccess) return true
	return false
}

export type AppRoutes = typeof routes

import {
	authorizedRoutes,
	getDashboardRoute,
	hasRoleAccess,
	routes,
	unAuthorizedRoutes
} from './shared/config/routes'
import { getSessionData } from './shared/graphql/graphql'
import { sessionCache } from './shared/utils/session-cache'
import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {
	const session = req.cookies.get('cb-session')?.value
	const sessionId = session?.split(':')[1].split('.')[0]
	const pathname = req.nextUrl.pathname

	if (Math.random() < 0.1) {
		sessionCache.cleanup()
	}

	let userRole = null

	if (sessionId) {
		userRole = sessionCache.get(sessionId)
		if (userRole && sessionCache.getTimeLeft(sessionId) < 60000) {
			userRole = null
		}
	}
	if (sessionId && !userRole) {
		const userData = await getSessionData(session, sessionId)

		if (userData) {
			sessionCache.set(sessionId, userData.getSessionById.role)
			userRole = userData.getSessionById.role
		} else {
			const response = NextResponse.next()
			response.cookies.delete('cb-session')
			sessionCache.delete(sessionId)
			return response
		}
	}

	const isPublicRoute = unAuthorizedRoutes.some(
		route => pathname === route || pathname.startsWith(route + '/')
	)

	const isProtectedRoute = authorizedRoutes.some(
		route => pathname === route || pathname.startsWith(route + '/')
	)

	if (!session && isProtectedRoute) {
		const loginUrl = new URL(routes.auth.student, req.url)
		return NextResponse.redirect(loginUrl)
	}

	if (
		session &&
		isPublicRoute &&
		pathname !== routes.home &&
		pathname !== routes.auth.verifyEmail &&
		pathname !== routes.auth.deactivated
	) {
		const routeUrl = getDashboardRoute(userRole)
		const dashboardUrl = new URL(routeUrl, req.url)
		return NextResponse.redirect(dashboardUrl)
	}

	if (session && isProtectedRoute) {
		const hasAccess = hasRoleAccess(userRole, pathname)
		const routeUrl = getDashboardRoute(userRole)
		const dashboardUrl = new URL(routeUrl, req.url)
		return hasAccess ? NextResponse.next() : NextResponse.redirect(dashboardUrl)
	}

	return NextResponse.next()
}
export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
	]
}

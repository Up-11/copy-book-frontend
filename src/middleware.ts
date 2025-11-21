import {
	authorizedRoutes,
	routes,
	unAuthorizedRoutes
} from './shared/config/routes'
import { getSessionData } from './shared/graphql/graphql'
import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {
	const session = req.cookies.get('cb-session')?.value
	const sessionId = session?.split(':')[1].split('.')[0]
	const userData = sessionId ? await getSessionData(session, sessionId) : ''
	const userRole = userData.getSessionById.role
	const pathname = req.nextUrl.pathname
	const isPublicRoute = unAuthorizedRoutes.some(
		route => pathname === route || pathname.startsWith(route + '/')
	)

	const isProtectedRoute = authorizedRoutes.some(
		route => pathname === route || pathname.startsWith(route + '/')
	)

	if (!session && isProtectedRoute) {
		const loginUrl = new URL('/auth/student', req.url)
		return NextResponse.redirect(loginUrl)
	}

	if (session && isPublicRoute && pathname !== routes.home) {
		const dashboardUrl = new URL('/student/dashboard', req.url)
		return NextResponse.redirect(dashboardUrl)
	}

	return NextResponse.next()
}
export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
	]
}

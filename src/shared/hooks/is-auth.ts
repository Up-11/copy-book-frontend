import {
	useFindProfileQuery,
	useLogoutUserMutation
} from '../api/graphql/generated/output'
import { routes } from '../config/routes'
import { useAuthStore } from '../store/auth-store'
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export const useIsAuth = () => {
	const isAuth = useAuthStore(state => state.isAuth)
	const resetRole = useAuthStore(state => state.resetRole)
	const resetUser = useAuthStore(state => state.resetUser)
	const role = useAuthStore(state => state.role)
	const router = useRouter()
	const [logoutMutation] = useLogoutUserMutation({
		onCompleted: () => {
			toast.success('Выход выполнен')
		},
		onError: error => {
			toast.error(error.message)
		}
	})

	const logout = (logoutRoute: string = routes.auth.student) => {
		resetUser()
		logoutMutation()
		Cookie.remove('cb-session', { path: '/' })
		resetRole()
		router.replace(logoutRoute)
	}
	const clientLogout = (logoutRoute: string = routes.auth.student) => {
		resetUser()
		resetRole()
		Cookie.remove('cb-session', { path: '/' })
		router.replace(logoutRoute)
	}

	if (role !== null) {
		return { isAuth, role, logout, clientLogout }
	}

	return { isAuth, logout, clientLogout }
}

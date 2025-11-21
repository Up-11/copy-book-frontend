import { UserRole } from '@/shared/graphql/generated/output'
import { isUserRole } from '@/shared/types/user.types'
import { usePathname } from 'next/navigation'

export const useCurrentUserRoleAuth = (): UserRole | null => {
	const pathname = usePathname()

	if (!pathname) return null

	const currentUserRole = pathname?.split('/')[2].toUpperCase() as UserRole

	if (isUserRole(currentUserRole)) {
		return currentUserRole
	}

	return null
}

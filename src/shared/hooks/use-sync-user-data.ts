import { useFindProfileQuery } from '../api/graphql/generated/output'
import { useAuthStore } from '../store/auth-store'
import { useCallback, useEffect } from 'react'

export const useUserDataSync = () => {
	const { data, loading, refetch, error } = useFindProfileQuery()
	const setUserInfo = useAuthStore(state => state.setUserInfo)

	const syncUserData = async () => {
		await refetch()
		if (data?.findProfile) {
			setUserInfo({
				firstName: data.findProfile.firstName,
				lastName: data.findProfile.lastName,
				email: data.findProfile.email,
				avatar: data.findProfile.avatar
			})
		}
	}

	useEffect(() => {
		syncUserData()
		console.log(data?.findProfile)
	}, [data?.findProfile])

	return {
		syncUserData: syncUserData,
		loading,
		user: data?.findProfile,
		error
	}
}

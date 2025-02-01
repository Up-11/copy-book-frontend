import { UserRole } from '../types/user.types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface IRoleStore {
	role: UserRole
	setRole: (value: UserRole) => void
}

export const useRoleStore = create<IRoleStore>()(
	persist(
		set => ({
			role: UserRole.STUDENT,
			setRole: value => set({ role: value })
		}),
		{
			name: 'role',
			storage: createJSONStorage(() => localStorage)
		}
	)
)

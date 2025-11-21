import { UserRole } from '../graphql/generated/output'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface IRoleStore {
	role: UserRole
	setRole: (value: UserRole) => void
}

export const useRoleStore = create<IRoleStore>()(
	persist(
		set => ({
			role: UserRole.Student,
			setRole: value => set({ role: value })
		}),
		{
			name: 'role',
			storage: createJSONStorage(() => localStorage)
		}
	)
)

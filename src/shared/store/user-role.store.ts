import { UserRole } from '../graphql/generated/output'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface IRoleStore {
	role: UserRole | null
	setRole: (value: UserRole) => void
	resetRole: () => void
}

export const useRoleStore = create<IRoleStore>()(
	persist(
		set => ({
			role: null,
			setRole: value => set({ role: value }),
			resetRole: () => set({ role: null })
		}),
		{
			name: 'role',
			storage: createJSONStorage(() => localStorage)
		}
	)
)

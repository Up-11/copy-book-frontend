import { UserRole } from '../api/graphql/generated/output'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface IAuthState {
	firstName: string
	lastName: string
	email: string
	avatar?: string | null
	isAuth: boolean
	role: UserRole | null
}
interface IAuthActions {
	setFirstName: (firstName: string) => void
	setLastName: (lastName: string) => void
	setEmail: (email: string) => void
	setAvatar: (avatar: string) => void
	setUserInfo: (userInfo: Partial<IAuthState>) => void
	getFullName(): string
	resetUser(): void
	setRole: (role: UserRole) => void
	resetRole: () => void
}

interface IAuthStore extends IAuthState, IAuthActions {}

const initialState: IAuthState = {
	firstName: '',
	lastName: '',
	email: '',
	avatar: '',
	role: null,
	isAuth: false
}

export const useAuthStore = create<IAuthStore>()(
	persist(
		(set, get) => ({
			...initialState,
			setFirstName: firstName => set({ firstName }),
			setLastName: lastName => set({ lastName }),
			setEmail: email => set({ email }),
			setAvatar: avatar => set({ avatar }),
			setUserInfo: (userInfo: Partial<IAuthState>) => set({ ...userInfo }),
			getFullName: () => {
				const { firstName, lastName } = get()
				return `${firstName} ${lastName}`.trim()
			},
			setRole: role => {
				set({ role })
			},
			resetRole() {
				set({ role: initialState.role })
			},
			resetUser: () => set({ ...initialState })
		}),
		{
			name: 'auth',
			storage: createJSONStorage(() => {
				if (typeof window !== 'undefined') {
					return localStorage
				}
				return {
					getItem: () => null,
					setItem: () => {},
					removeItem: () => {}
				}
			})
		}
	)
)

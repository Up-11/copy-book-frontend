import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface IAuthState {
	firstName: string
	lastName: string
	email: string
	avatar?: string | null
}
interface IAuthActions {
	setFirstName: (firstName: string) => void
	setLastName: (lastName: string) => void
	setEmail: (email: string) => void
	setAvatar: (avatar: string) => void
	setUserInfo: (userInfo: IAuthState) => void
	getFullName(): string
}

interface IAuthStore extends IAuthState, IAuthActions {}

const initialState: IAuthState = {
	firstName: '',
	lastName: '',
	email: '',
	avatar: ''
}

export const useAuthStore = create<IAuthStore>()(
	persist(
		(set, get) => ({
			...initialState,
			setFirstName: firstName => set({ firstName }),
			setLastName: lastName => set({ lastName }),
			setEmail: email => set({ email }),
			setAvatar: avatar => set({ avatar }),
			setUserInfo: (userInfo: IAuthState) => set({ ...userInfo }),
			getFullName: () => {
				const { firstName, lastName } = get()
				return `${firstName} ${lastName}`.trim()
			}
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

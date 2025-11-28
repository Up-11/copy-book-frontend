import { CoursePrivacy } from '@/shared/api/graphql/generated/output'
import { Task } from '@/shared/types/task.types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface ICourseCreationState {
	course: {
		id: string
		title: string
		description: string
		privacy: CoursePrivacy
		accessToken?: string
		section: {
			id: string
			title: string
			order: number
		} | null
	}
}

type ICourseCreationActions = {
	setTitle: (value: string) => void
	setDescription: (value: string) => void
	setCoursePrivacy: (value: CoursePrivacy) => void
	setAccessToken: (value: string) => void
	setCourseId: (value: string) => void
	setSection: (
		value: {
			id: string
			title: string
			order: number
		} | null
	) => void
}

type ICourseCreationStore = ICourseCreationState & ICourseCreationActions

const initialState: ICourseCreationState = {
	course: {
		id: '',
		title: '',
		description: '',
		privacy: CoursePrivacy.Public,
		accessToken: undefined,
		section: null
	}
}

export const courseCreationStore = create<ICourseCreationStore>()(
	persist(
		(set, get) => ({
			course: initialState.course,
			setTitle: (value: string) =>
				set(state => ({
					course: { ...state.course, title: value }
				})),
			setDescription(value: string) {
				set(state => ({
					course: { ...state.course, description: value }
				}))
			},
			setCoursePrivacy(value: CoursePrivacy) {
				set(state => ({
					course: { ...state.course, privacy: value }
				}))
			},
			setAccessToken(value: string) {
				set(state => ({
					course: { ...state.course, accessToken: value }
				}))
			},
			setCourseId(value: string) {
				set(state => ({
					course: { ...state.course, id: value }
				}))
			},
			setSection(
				value: {
					id: string
					title: string
					order: number
				} | null
			) {
				set(state => ({
					course: {
						...state.course,
						section: state.course.section?.id === value?.id ? null : value
					}
				}))
			}
		}),
		{
			name: 'course-creation-storage',
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

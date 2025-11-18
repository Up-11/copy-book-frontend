import { CoursePrivacy } from '@/shared/types/course.types'
import { Task } from '@/shared/types/task.types'
import { create } from 'zustand'

interface ICourseCreationState {
	course: {
		title: string
		description: string
		privacy: CoursePrivacy
		code?: string
		chapters: {
			title: string
			tasks: Task[]
		}[]
	}
}

type ICourseCreationActions = {
	updateTitle: (value: string) => void
	updateDescription: (value: string) => void
	setCoursePrivacy: (value: CoursePrivacy) => void
	setCode: (value: string) => void
	createChapter: (title: string) => void
	deleteChapter: (id: string) => void
	editChapter: (id: string, title: string) => void
	addTask: (chapterId: string, taskId: string) => void
}

type ICourseCreationStore = ICourseCreationState & ICourseCreationActions

const initialState: ICourseCreationState = {
	course: {
		title: '',
		description: '',
		privacy: CoursePrivacy.Public,
		code: undefined,
		chapters: []
	}
}

export const courseCreationStore = create<ICourseCreationStore>(set => ({
	course: initialState.course,
	updateTitle: (value: string) =>
		set(state => ({
			course: { ...state.course, title: value }
		})),
	updateDescription(value: string) {
		set(state => ({
			course: { ...state.course, description: value }
		}))
	},
	setCoursePrivacy(value: CoursePrivacy) {
		set(state => ({
			course: { ...state.course, privacy: value }
		}))
	},
	setCode(value: string) {
		if (value.length === 6) {
			set(state => ({
				course: { ...state.course, code: value }
			}))
		}
	},
	createChapter: (title: string) => {},
	deleteChapter: (id: string) => {},
	editChapter: (id: string, title: string) => {},
	addTask: (chapterId: string, taskId: string) => {}
}))

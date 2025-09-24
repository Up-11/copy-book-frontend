import { create } from 'zustand'

interface ICourseCreationState {
	task: {
		title: string
	}
}

type ICourseCreationActions = {
	updateTitle: (value: string) => void
}

type ICourseCreationStore = ICourseCreationState & ICourseCreationActions

const initialState: ICourseCreationState = {
	task: {
		title: ''
	}
}

export const taskCreationStore = create<ICourseCreationStore>(set => ({
	task: initialState.task,
	updateTitle: (value: string) =>
		set(state => ({
			task: { ...state.task, title: value }
		}))
}))

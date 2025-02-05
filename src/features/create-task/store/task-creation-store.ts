import { TaskDifficulty } from '@/shared/types/task.types'
import { create } from 'zustand'

interface ITaskCreationState {
	task: {
		title: string
		difficulty: TaskDifficulty | null
		course: {
			title: string
			chapter: string
		}
		anonymus: boolean
	}
}

type ITaskCreationActions = {
	updateTitle: (value: string) => void
	updateAnonymus: (value: boolean) => void
	updateDifficulty: (value: TaskDifficulty) => void
	updateCourse: (
		courseUpdate: Partial<ITaskCreationState['task']['course']>
	) => void
}

type ITaskCreationStore = ITaskCreationState & ITaskCreationActions

const initialState: ITaskCreationState = {
	task: {
		title: '',
		difficulty: null,
		course: {
			title: '',
			chapter: ''
		},
		anonymus: false
	}
}

export const taskCreationStore = create<ITaskCreationStore>(set => ({
	task: initialState.task,
	updateTitle: (value: string) =>
		set(state => ({
			task: { ...state.task, title: value }
		})),
	updateAnonymus: (value: boolean) =>
		set(state => ({
			task: { ...state.task, anonymus: value }
		})),
	updateDifficulty: (value: TaskDifficulty) =>
		set(state => ({
			task:
				state.task.difficulty === value
					? { ...state.task, difficulty: null }
					: { ...state.task, difficulty: value }
		})),
	updateCourse: (courseUpdate: Partial<ITaskCreationState['task']['course']>) =>
		set(state => ({
			task: {
				...state.task,
				course: {
					...state.task.course,
					...courseUpdate
				}
			}
		}))
}))

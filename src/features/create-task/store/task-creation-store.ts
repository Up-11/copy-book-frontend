import { TaskDifficulty, TaskType } from '@/shared/types/task.types'
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
		description: string
		type: TaskType | undefined
	}
}

type ITaskCreationActions = {
	updateTitle: (value: string) => void
	updateAnonymus: (value: boolean) => void
	updateDifficulty: (value: TaskDifficulty) => void
	updateCourse: (
		courseUpdate: Partial<ITaskCreationState['task']['course']>
	) => void
	setDescription: (value: string) => void
	setTaskType: (value: TaskType) => void
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
		anonymus: false,
		description: '',
		type: undefined
	}
}

export const taskCreationStore = create<ITaskCreationStore>(set => ({
	task: initialState.task,
	setDescription: (value: string) =>
		set(state => ({
			task: { ...state.task, description: value }
		})),
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
		})),
	setTaskType: (value: TaskType) =>
		set(state => ({
			task: { ...state.task, type: value }
		}))
}))

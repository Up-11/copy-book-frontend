import { taskCreationStore } from '../store/task-creation-store'
import { TaskType } from '@/shared/types/task.types'

export const useTaskCreation = () => {
	const setTitle = taskCreationStore(state => state.updateTitle)
	const setDifficulty = taskCreationStore(state => state.updateDifficulty)
	const setAnonimus = taskCreationStore(state => state.updateAnonymus)
	const setCourse = taskCreationStore(state => state.updateCourse)
	const setDescription = taskCreationStore(state => state.setDescription)
	const updateTaskType = taskCreationStore(state => state.setTaskType)
	const task = taskCreationStore(state => state.task)

	const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value)
	}

	const handleChangeAnonimus = (value: boolean) => {
		setAnonimus(value)
	}

	const setCourseTitle = (value: string) => {
		setCourse({
			title: value,
			chapter: task.course.title === value ? '' : task.course.chapter
		})
	}
	const setCourseChapter = (value: string) => {
		setCourse({ ...task.course, chapter: value })
	}

	const setTaskType = (value: string) => {
		updateTaskType(value as TaskType)
	}

	return {
		getters: task,
		setters: {
			type: setTaskType,
			title: handleTitleInput,
			desc: setDescription,
			diff: setDifficulty,
			course: setCourse,
			anonimus: handleChangeAnonimus,
			setCourseChapter: setCourseChapter,
			setCourseTitle: setCourseTitle
		}
	}
}

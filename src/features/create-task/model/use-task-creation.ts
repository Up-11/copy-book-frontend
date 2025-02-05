import { taskCreationStore } from '../store/task-creation-store'

export const useTaskCreation = () => {
	const setTitle = taskCreationStore(state => state.updateTitle)
	const setDifficulty = taskCreationStore(state => state.updateDifficulty)
	const setAnonimus = taskCreationStore(state => state.updateAnonymus)
	const setCourse = taskCreationStore(state => state.updateCourse)

	const task = taskCreationStore(state => state.task)

	const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value)
	}

	const handleChangeAnonimus = (value: boolean) => {
		setAnonimus(value)
	}

	const setCourseTitle = (value: string) => {
		setCourse({
			title: task.course.title,
			chapter: task.course.title === value ? task.course.chapter : ''
		})
	}
	const setCourseChapter = (value: string) => {
		setCourse({ ...task.course, chapter: value })
	}

	return {
		getters: task,
		setters: {
			title: handleTitleInput,
			diff: setDifficulty,
			anonimus: handleChangeAnonimus,
			setCourseChapter: setCourseChapter,
			setCourseTitle: setCourseTitle
		}
	}
}

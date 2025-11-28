import { courseCreationStore } from '../store/use-course-creation-store'

export const useCourseCreation = () => {
	const course = courseCreationStore(state => state.course)
	const privacy = courseCreationStore(state => state.setCoursePrivacy)
	const accessToken = courseCreationStore(state => state.setAccessToken)
	const title = courseCreationStore(state => state.setTitle)
	const description = courseCreationStore(state => state.setDescription)
	const id = courseCreationStore(state => state.setCourseId)
	const section = courseCreationStore(state => state.setSection)

	return {
		getters: course,
		setters: {
			privacy,
			accessToken,
			title,
			description,
			id,
			section
		}
	}
}

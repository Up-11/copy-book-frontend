import { CourseCreationDescription } from './course-creation-description'
import { CourseCreationMainData } from './course-creation-main-data'
import { CourseCreationSectionsAndTasks } from './course-creation-sections-and-tasks'
import { Section } from '@/shared/ui/custom/section-list'

export const COURSE_SECTIONS: Record<string, Section> = {
	BASIC: {
		id: 'basic',
		name: 'Шаг 1: Основные данные',
		component: CourseCreationMainData,
		canOpen: false
	},
	DESCRIPTION: {
		id: 'description',
		name: 'Шаг 2: Описание',
		component: CourseCreationDescription,
		canOpen: false
	},
	SECTIONS_AND_TASKS: {
		id: 'sections-and-tasks',
		name: 'Шаг 3: Секции и задания',
		component: CourseCreationSectionsAndTasks,
		canOpen: false
	}
} as const

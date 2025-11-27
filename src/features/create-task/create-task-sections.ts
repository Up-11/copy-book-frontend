import { CreationMainData } from './ui/creation-main-data'
import { CreationTaskDescription } from './ui/creation-task-description'
import { TaskPreview } from './ui/task-preview'
import { CreationTaskTypeAndAnswer } from './ui/task-type/creation-task-type-and-answer'
import { Section } from '@/shared/ui/custom/section-list'

export const SECTIONS: Record<string, Section> = {
	BASIC: {
		id: 'basic',
		name: 'Шаг 1: Основные данные',
		component: CreationMainData,
		canOpen: false
	},
	DESCRIPTION: {
		id: 'description',
		name: 'Шаг 2: Описание',
		component: CreationTaskDescription,
		canOpen: false
	},
	TASK: {
		id: 'task',
		name: 'Шаг 3: Тип задания и ответ',
		component: CreationTaskTypeAndAnswer,
		canOpen: false
	},
	PREVIEW: {
		id: 'preview',
		name: 'Шаг 4: Предпросмотр и публикация',
		component: TaskPreview,
		canOpen: false
	}
} as const

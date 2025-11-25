import { CreationMainData } from './ui/creation-main-data'
import { CreationTaskDescription } from './ui/creation-task-description'
import { TaskPreview } from './ui/task-preview'
import { CreationTaskTypeAndAnswer } from './ui/task-type/creation-task-type-and-answer'

export const SECTIONS = {
	BASIC: {
		id: 'basic',
		name: 'Шаг 1: Основные данные',
		component: CreationMainData
	},
	DESCRIPTION: {
		id: 'description',
		name: 'Шаг 2: Описание',
		component: CreationTaskDescription
	},
	TASK: {
		id: 'task',
		name: 'Шаг 3: Тип задания и ответ',
		component: CreationTaskTypeAndAnswer
	},
	PREVIEW: {
		id: 'preview',
		name: 'Шаг 4: Предпросмотр и публикация',
		component: TaskPreview
	}
} as const

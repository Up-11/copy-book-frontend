import { TaskDifficulty, TaskStatus, TaskType } from '../types/task.types'
import { UserRole } from '@/shared/types/user.types'

export const getBadgeByUserRole = (role: UserRole) => {
	const roleBadgeMap = new Map<UserRole, { text: string; classNames: string }>([
		[
			UserRole.STUDENT,
			{ text: 'Ученик', classNames: 'border-sky-200 bg-sky-100' }
		],
		[
			UserRole.TEACHER,
			{ text: 'Учитель', classNames: 'border-violet-200 bg-violet-100' }
		],
		[UserRole.ADMIN, { text: 'Админ', classNames: 'border-red-200 bg-red-100' }]
	])

	return roleBadgeMap.get(role) ?? { text: '', classNames: '' }
}

export const getBadgeByTaskType = (type: TaskType) => {
	const taskBadgeMap = new Map<TaskType, { text: string; classNames: string }>([
		[
			TaskType.ChooseAnswer,
			{ text: 'Выбор ответа', classNames: 'border-sky-200 bg-sky-100' }
		],
		[
			TaskType.Code,
			{ text: 'Код', classNames: 'border-violet-200 bg-violet-100' }
		],
		[
			TaskType.DragAndDrop,
			{ text: 'Перетаскивание', classNames: 'border-red-200 bg-red-100' }
		],
		[
			TaskType.WriteAnswer,
			{ text: 'Запись ответа', classNames: 'border-red-200 bg-red-100' }
		]
	])

	return taskBadgeMap.get(type) ?? { text: '', classNames: '' }
}

export const getBadgeByTaskDifficulty = (diff: TaskDifficulty) => {
	const taskBadgeMap = new Map<
		TaskDifficulty,
		{ text: string; classNames: string }
	>([
		[
			TaskDifficulty.Hard,
			{ text: 'Сложно', classNames: 'border-red-200 bg-red-100' }
		],
		[
			TaskDifficulty.Medium,
			{ text: 'Средне', classNames: 'border-yellow-200 bg-yellow-100' }
		],
		[
			TaskDifficulty.Simple,
			{ text: 'Просто', classNames: 'border-green-200 bg-green-100' }
		]
	])

	return taskBadgeMap.get(diff) ?? { text: '', classNames: '' }
}
export const getDotColorByTaskDifficulty = (diff: TaskDifficulty) => {
	const taskDotMap = new Map<TaskDifficulty, { classNames: string }>([
		[TaskDifficulty.Hard, { classNames: 'bg-red-500' }],
		[TaskDifficulty.Medium, { classNames: 'bg-yellow-500' }],
		[TaskDifficulty.Simple, { classNames: 'bg-green-500' }]
	])
	return taskDotMap.get(diff) ?? { classNames: '' }
}
export const getTaskStatus = (status: TaskStatus) => {
	const taskStatusMap = new Map<TaskStatus, string>([
		[TaskStatus.Active, 'Активно'],
		[TaskStatus.Closed, 'Завершено'],
		[TaskStatus.Pending, 'В работе'],
		[TaskStatus.New, 'Не начато']
	])
	return taskStatusMap.get(status) ?? ''
}

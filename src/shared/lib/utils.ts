import { TaskDifficulty } from '../types/task.types'
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

export const getBadgeByTaskDifficulty = (diff: TaskDifficulty) => {
	const roleBadgeMap = new Map<
		TaskDifficulty,
		{ text: string; classNames: string }
	>([
		[
			TaskDifficulty.Hard,
			{ text: 'Сложно', classNames: 'border-sky-200 bg-sky-100' }
		],
		[
			TaskDifficulty.Medium,
			{ text: 'Средне', classNames: 'border-violet-200 bg-violet-100' }
		],
		[
			TaskDifficulty.Simple,
			{ text: 'Просто', classNames: 'border-red-200 bg-red-100' }
		]
	])

	return roleBadgeMap.get(diff) ?? { text: '', classNames: '' }
}

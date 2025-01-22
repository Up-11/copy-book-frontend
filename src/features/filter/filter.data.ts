import { FilterType } from './types'
import {
	getBadgeByTaskDifficulty,
	getBadgeByTaskType,
	getStatus
} from '@/shared/lib/map'
import { createFilter } from '@/shared/lib/utils'
import { courses } from '@/shared/mock/mock'
import { TaskDifficulty, TaskStatus, TaskType } from '@/shared/types/task.types'

export const difficultyFilter = createFilter(
	[TaskDifficulty.Hard, TaskDifficulty.Medium, TaskDifficulty.Simple],
	difficulty => getBadgeByTaskDifficulty(difficulty).text
)

export const typeFilter = createFilter(
	[
		TaskType.ChooseAnswer,
		TaskType.Code,
		TaskType.DragAndDrop,
		TaskType.WriteAnswer
	],
	type => getBadgeByTaskType(type).text
)

export const taskStatusFilter = createFilter(
	[TaskStatus.Active, TaskStatus.Closed, TaskStatus.Pending],
	status => getStatus<TaskStatus>(status)
)

const courseTitle = courses.map(course => {
	return course.title
})

export const courseFilter = createFilter(courseTitle, title => title)

export const sortFilter: FilterType[] = [
	{
		text: 'По имени (A-Z)',
		value: 'name_asc'
	},
	{
		text: 'По имени (Z-A)',
		value: 'name_desc'
	},
	{
		text: 'По дате (Новые сначала)',
		value: 'date_desc'
	},
	{
		text: 'По дате (Старые сначала)',
		value: 'date_asc'
	},
	{
		text: 'По сложности (От простой к сложной)',
		value: 'difficulty_asc'
	},
	{
		text: 'По сложности (От сложной к простой)',
		value: 'difficulty_desc'
	}
]
export const sortFilterCourse: FilterType[] = [
	{
		text: 'По имени (A-Z)',
		value: 'name_asc'
	},
	{
		text: 'По имени (Z-A)',
		value: 'name_desc'
	},
	{
		text: 'По дате (Новые сначала)',
		value: 'date_desc'
	},
	{
		text: 'По дате (Старые сначала)',
		value: 'date_asc'
	}
]

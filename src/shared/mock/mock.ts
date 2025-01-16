import {
	TaskPageProps,
	TaskDifficulty,
	TaskStatus,
	TaskResult
	// TaskPrivacy,
	// TaskType
} from '../types/task.types'

export const dashboardTasks: TaskPageProps[] = Array.from(
	{ length: 30 },
	(_, index) => {
		const difficulties = [
			TaskDifficulty.Simple,
			TaskDifficulty.Medium,
			TaskDifficulty.Hard
		]
		const statuses = [
			TaskStatus.New,
			TaskStatus.Closed,
			TaskStatus.Active,
			TaskStatus.Pending
		]
		const results = [
			TaskResult.Failed,
			TaskResult.Completed,
			TaskResult.TimeIsOver
		]

		const courses = [
			'Основы программирования',
			'React для начинающих',
			'Базы данных',
			'Оптимизация производительности',
			'Алгоритмы и структуры данных',
			undefined
		]
		const teachers = [
			'Иван Иванов',
			'Анна Петрова',
			'Сергей Смирнов',
			'Екатерина Федорова',
			'Дмитрий Соколов',
			undefined
		]

		const titles = [
			'Изучить основы TypeScript',
			'Создать ToDo-приложение',
			'Оптимизировать запросы к базе данных',
			'Написать REST API',
			'Реализовать авторизацию на сайте',
			'Разработать адаптивный дизайн',
			'Настроить CI/CD для проекта',
			'Провести код-ревью',
			'Изучить GraphQL',
			'Оптимизировать загрузку изображений'
		]

		return {
			id: String(index),
			title: titles[index % titles.length],
			description: `Описание задачи номер ${index}: выполните указанное действие для достижения результата.`,
			completedMicrotasks: 5,
			difficulty: difficulties[index % difficulties.length],
			TaskCourse: courses[index % courses.length],
			microtasksQuantity: 10,
			deadline: '2025-01-30T00:00:00.000Z',
			dateOfCreation: '2025-01-01T00:00:00.000Z',
			timeToComplete: '5h',
			timeWhenCompletionStarted: '2025-01-10T00:00:00.000Z',
			timeWhenCompletionCompleted: '2025-01-15T00:00:00.000Z',
			taskResult: results[index % results.length],
			taskStatus: statuses[index % statuses.length],
			course: courses[index % courses.length],
			teacher: teachers[index % teachers.length],
			sutdentsComplete: 10,
			taskRating: 4
		}
	}
)

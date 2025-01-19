import { Course } from '../types/course.types'
import {
	TaskDifficulty,
	TaskStatus,
	TaskResult,
	TaskType,
	TaskProps
	// TaskPrivacy,
	// TaskType
} from '../types/task.types'

export const dashboardTasks: TaskProps[] = Array.from(
	{ length: 30 },
	(_, index) => {
		const difficulties = [
			TaskDifficulty.Simple,
			TaskDifficulty.Medium,
			TaskDifficulty.Hard
		]
		const types = [
			TaskType.ChooseAnswer,
			TaskType.Code,
			TaskType.DragAndDrop,
			TaskType.WriteAnswer
		]

		const statuses = [
			TaskStatus.New,
			TaskStatus.Closed,
			TaskStatus.Active,
			TaskStatus.Pending,
			TaskStatus.NotStarted
		]
		const results = [
			TaskResult.Failed,
			TaskResult.Completed,
			TaskResult.TimeIsOver
		]

		const courses = [
			undefined,
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
			type: types[index % types.length],
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
export const courses: Course[] = [
	{ courseId: 1, title: 'Introduction to Programming' },
	{ courseId: 2, title: 'Advanced JavaScript' },
	{ courseId: 3, title: 'Web Development Basics' },
	{ courseId: 4, title: 'React for Beginners' },
	{ courseId: 5, title: 'Mastering TypeScript' },
	{ courseId: 6, title: 'Database Design Fundamentals' },
	{ courseId: 7, title: 'Node.js Essentials' },
	{ courseId: 8, title: 'Python for Data Science' },
	{ courseId: 9, title: 'Machine Learning 101' },
	{ courseId: 10, title: 'Artificial Intelligence Basics' },
	{ courseId: 11, title: 'Mobile App Development with Flutter' },
	{ courseId: 12, title: 'Game Development with Unity' },
	{ courseId: 13, title: 'Cloud Computing Essentials' },
	{ courseId: 14, title: 'DevOps Practices and Tools' },
	{ courseId: 15, title: 'Cybersecurity Fundamentals' },
	{ courseId: 16, title: 'UI/UX Design Principles' },
	{ courseId: 17, title: 'Data Structures and Algorithms' },
	{ courseId: 18, title: 'Big Data Analytics' },
	{ courseId: 19, title: 'Blockchain Technology Overview' },
	{ courseId: 20, title: 'Digital Marketing Strategies' },
	{ courseId: 21, title: 'SEO Optimization Techniques' },
	{ courseId: 22, title: 'Content Creation for Social Media' },
	{ courseId: 23, title: 'Project Management Basics' },
	{ courseId: 24, title: 'Agile Methodologies' },
	{ courseId: 25, title: 'Introduction to Robotics' },
	{ courseId: 26, title: '3D Modeling with Blender' },
	{ courseId: 27, title: 'Photography and Editing Basics' },
	{ courseId: 28, title: 'Music Production Essentials' },
	{ courseId: 29, title: 'Video Editing with Premiere Pro' },
	{ courseId: 30, title: 'Public Speaking and Presentation Skills' }
]

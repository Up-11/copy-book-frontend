import { Course, CoursePrivacy, CourseStatus } from '../types/course.types'
import {
	TaskDifficulty,
	TaskStatus,
	TaskResult,
	TaskType,
	TaskProps,
	TaskPrivacy
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
			microtasksQuantity: 10,
			deadline: '2025-01-30T00:00:00.000Z',
			dateOfCreation: '2025-01-01T00:00:00.000Z',
			timeToComplete: '5h',
			timeWhenCompletionStarted: '2025-01-10T00:00:00.000Z',
			timeWhenCompletionCompleted: '2025-01-15T00:00:00.000Z',
			result: results[index % results.length],
			status: statuses[index % statuses.length],
			course: courses[index % courses.length],
			teacher: teachers[index % teachers.length],
			sutdentsComplete: 10,
			rating: 4,
			microTasks: Array.from({ length: 5 }, (_, microIndex) => ({
				id: `${index}-${microIndex}`,
				title: `Микрозадача ${microIndex + 1}`,
				description: `Описание микрозадачи ${microIndex + 1} для задачи ${index}`,
				status: statuses[index % statuses.length],
				type: types[index % types.length]
			}))
		}
	}
)

export const courses: Course[] = [
	{
		courseId: '1',
		title: 'Introduction to Programming',
		description: 'Learn the basics of programming with practical examples.',
		items: [
			{
				contentItem: {
					title: 'Variables and Data Types',
					content:
						'Learn about variables and different data types in programming.'
				},
				title: 'Variables and Data Types',
				status: CourseStatus.NotStarted,
				type: undefined,
				description: 'Learn about variables and different data types.'
			},
			{
				contentItem: {
					id: 'task-1',
					title: 'Basic Syntax and Functions',
					description:
						'Learn the syntax of basic programming languages and functions.',
					difficulty: TaskDifficulty.Simple,
					microtasksQuantity: 2,
					status: TaskStatus.Active,
					privacy: TaskPrivacy.Public,
					communication: { teacher: 'John Doe', sutdentsComplete: 20 },
					dateAndTime: {
						dateOfCreation: '2024-01-10',
						timeToComplete: '1 hour',
						timeWhenCompletionStarted: '2024-01-10 09:00',
						timeWhenCompletionCompleted: '2024-01-10 10:00',
						deadline: '2024-01-12'
					},
					result: TaskResult.Completed
				},
				title: 'Basic Syntax and Functions',
				status: CourseStatus.Active,
				type: TaskType.ChooseAnswer,
				description:
					'Learn the syntax of basic programming languages and functions.'
			}
		],
		metadata: {
			teacher: 'John Doe',
			comments: 'Great course for beginners.',
			creationDate: '2024-01-10'
		},
		code: 456332,
		progress: {
			itemsCompleted: 3,
			currentItem: {
				contentItem: {
					title: 'Variables and Data Types',
					content: 'Learn about variables and different data types.'
				},
				title: 'Variables and Data Types',
				status: CourseStatus.NotStarted,
				type: undefined,
				description: 'Learn about variables and different data types.'
			},
			itemsQuantity: 5
		},
		statistics: {
			studentsNow: 200,
			totalStudents: 100,
			averageCompletionTime: '2 hours',
			averageRating: 4.5
		},
		status: CourseStatus.InProgress,
		privacy: CoursePrivacy.Public
	},
	{
		courseId: '2',
		title: 'Advanced JavaScript',
		description: 'Deep dive into JavaScript, covering advanced topics.',
		items: [
			{
				contentItem: {
					title: 'Asynchronous JavaScript',
					content: 'Understanding async functions and promises.'
				},
				title: 'Asynchronous JavaScript',
				status: CourseStatus.NotStarted,
				type: undefined,
				description: 'Understanding async functions and promises.'
			},
			{
				contentItem: {
					id: 'task-2',
					title: 'JavaScript Closures',
					description: 'Learn about closures and how they work in JavaScript.',
					difficulty: TaskDifficulty.Medium,
					microtasksQuantity: 3,
					status: TaskStatus.Pending,
					privacy: TaskPrivacy.Public,
					communication: { teacher: 'Jane Smith', sutdentsComplete: 15 },
					dateAndTime: {
						dateOfCreation: '2024-02-01',
						timeToComplete: '1.5 hours',
						timeWhenCompletionStarted: '2024-02-01 10:00',
						timeWhenCompletionCompleted: '2024-02-01 11:30',
						deadline: '2024-02-03'
					},
					result: TaskResult.Failed
				},
				title: 'JavaScript Closures',
				status: CourseStatus.Active,
				type: TaskType.Code,
				description: 'Learn about closures and how they work in JavaScript.'
			}
		],
		metadata: {
			teacher: 'Jane Smith',
			comments: 'A very detailed course on JavaScript.',
			creationDate: '2024-02-01'
		},
		code: 123456,
		progress: {
			itemsCompleted: 4,
			currentItem: {
				contentItem: {
					title: 'Asynchronous JavaScript',
					content: 'Understanding async functions and promises.'
				},
				title: 'Asynchronous JavaScript',
				status: CourseStatus.NotStarted,
				type: undefined,
				description: 'Understanding async functions and promises.'
			},
			itemsQuantity: 6
		},
		statistics: {
			studentsNow: 150,
			totalStudents: 300,
			averageCompletionTime: '3 hours',
			averageRating: 4.8
		},
		status: CourseStatus.InProgress,
		privacy: CoursePrivacy.Public
	},
	{
		courseId: '3',
		title: 'Web Development Bootcamp',
		description: 'Learn web development from scratch.',
		items: [
			{
				contentItem: {
					title: 'HTML and CSS Basics',
					content: 'Learn the fundamentals of HTML and CSS.'
				},
				title: 'HTML and CSS Basics',
				status: CourseStatus.NotStarted,
				type: undefined,
				description: 'Learn the fundamentals of HTML and CSS.'
			},
			{
				contentItem: {
					id: 'task-3',
					title: 'Building a Portfolio Website',
					description:
						'Create a responsive portfolio website using HTML and CSS.',
					difficulty: TaskDifficulty.Simple,
					microtasksQuantity: 2,
					status: TaskStatus.Active,
					privacy: TaskPrivacy.Public,
					communication: { teacher: 'Emily Johnson', sutdentsComplete: 25 },
					dateAndTime: {
						dateOfCreation: '2024-03-01',
						timeToComplete: '2 hours',
						timeWhenCompletionStarted: '2024-03-01 09:00',
						timeWhenCompletionCompleted: '2024-03-01 11:00',
						deadline: '2024-03-05'
					},
					result: TaskResult.Completed
				},
				title: 'Building a Portfolio Website',
				status: CourseStatus.Active,
				type: TaskType.DragAndDrop,
				description: 'Create a responsive portfolio website using HTML and CSS.'
			}
		],
		metadata: {
			teacher: 'Emily Johnson',
			comments: 'Excellent for beginners in web development.',
			creationDate: '2024-03-01'
		},
		progress: {
			itemsCompleted: 5,
			currentItem: {
				contentItem: {
					title: 'HTML and CSS Basics',
					content: 'Learn the fundamentals of HTML and CSS.'
				},
				title: 'HTML and CSS Basics',
				status: CourseStatus.NotStarted,
				type: undefined,
				description: 'Learn the fundamentals of HTML and CSS.'
			},
			itemsQuantity: 7
		},
		statistics: {
			studentsNow: 200,
			totalStudents: 500,
			averageCompletionTime: '5 hours',
			averageRating: 4.9
		},
		status: CourseStatus.InProgress,
		privacy: CoursePrivacy.Public
	},

	{
		courseId: '4',
		title: 'Основы Python',
		description: 'Изучите основы Python с примерами из реальной жизни.',
		items: [
			{
				contentItem: {
					title: 'Переменные и структуры данных',
					content:
						'Изучите переменные, списки, словари и другие структуры данных.'
				},
				title: 'Переменные и структуры данных',
				status: CourseStatus.NotStarted,
				type: undefined,
				description:
					'Изучите переменные, списки, словари и другие структуры данных.'
			},
			{
				contentItem: {
					id: 'task-4',
					title: 'Условия и циклы',
					description:
						'Научитесь использовать условные конструкции и циклы в Python.',
					difficulty: TaskDifficulty.Simple,
					microtasksQuantity: 3,
					status: TaskStatus.Pending,
					privacy: TaskPrivacy.Public,
					communication: { teacher: 'Анна Смирнова', sutdentsComplete: 18 },
					dateAndTime: {
						dateOfCreation: '2024-04-01',
						timeToComplete: '1 час',
						timeWhenCompletionStarted: '2024-04-01 10:00',
						timeWhenCompletionCompleted: undefined,
						deadline: '2024-04-03'
					},
					result: TaskResult.Failed
				},
				title: 'Условия и циклы',
				status: CourseStatus.Active,
				type: TaskType.Code,
				description:
					'Научитесь использовать условные конструкции и циклы в Python.'
			}
		],
		metadata: {
			teacher: 'Анна Смирнова',
			comments: 'Хороший курс для начинающих.',
			creationDate: '2024-04-01'
		},
		progress: {
			itemsCompleted: 2,
			currentItem: {
				contentItem: {
					title: 'Переменные и структуры данных',
					content:
						'Изучите переменные, списки, словари и другие структуры данных.'
				},
				title: 'Переменные и структуры данных',
				status: CourseStatus.NotStarted,
				type: undefined,
				description:
					'Изучите переменные, списки, словари и другие структуры данных.'
			},
			itemsQuantity: 4
		},
		statistics: {
			studentsNow: 120,
			totalStudents: 250,
			averageCompletionTime: '2.5 часа',
			averageRating: 4.7
		},
		status: CourseStatus.InProgress,
		privacy: CoursePrivacy.Public
	},
	{
		courseId: '5',
		title: 'Машинное обучение для начинающих',
		description:
			'Погружение в основы машинного обучения с примерами и практикой.',
		items: [
			{
				contentItem: {
					title: 'Введение в машинное обучение',
					content:
						'Познакомьтесь с ключевыми понятиями и методами машинного обучения.'
				},
				title: 'Введение в машинное обучение',
				status: CourseStatus.NotStarted,
				type: undefined,
				description:
					'Познакомьтесь с ключевыми понятиями и методами машинного обучения.'
			},
			{
				contentItem: {
					id: 'task-5',
					title: 'Линейная регрессия',
					description:
						'Научитесь использовать линейную регрессию для прогнозирования.',
					difficulty: TaskDifficulty.Medium,
					microtasksQuantity: 2,
					status: TaskStatus.Active,
					privacy: TaskPrivacy.Public,
					communication: { teacher: 'Дмитрий Иванов', sutdentsComplete: 30 },
					dateAndTime: {
						dateOfCreation: '2024-05-01',
						timeToComplete: '2 часа',
						timeWhenCompletionStarted: '2024-05-01 11:00',
						timeWhenCompletionCompleted: undefined,
						deadline: '2024-05-03'
					},
					result: TaskResult.Completed
				},
				title: 'Линейная регрессия',
				status: CourseStatus.Active,
				type: TaskType.Code,
				description:
					'Научитесь использовать линейную регрессию для прогнозирования.'
			}
		],
		metadata: {
			teacher: 'Дмитрий Иванов',
			comments: 'Интересный курс для старта в ML.',
			creationDate: '2024-05-01'
		},
		progress: {
			itemsCompleted: 1,
			currentItem: {
				contentItem: {
					title: 'Введение в машинное обучение',
					content:
						'Познакомьтесь с ключевыми понятиями и методами машинного обучения.'
				},
				title: 'Введение в машинное обучение',
				status: CourseStatus.NotStarted,
				type: undefined,
				description:
					'Познакомьтесь с ключевыми понятиями и методами машинного обучения.'
			},
			itemsQuantity: 5
		},
		statistics: {
			studentsNow: 150,
			totalStudents: 400,
			averageCompletionTime: '3.5 часа',
			averageRating: 4.8
		},
		status: CourseStatus.InProgress,
		privacy: CoursePrivacy.Public
	},
	{
		courseId: '6',
		title: 'Машинное обучение для начинающих',
		description:
			'Погружение в основы машинного обучения с примерами и практикой.',
		items: [
			{
				contentItem: {
					title: 'Введение в машинное обучение',
					content:
						'Познакомьтесь с ключевыми понятиями и методами машинного обучения.'
				},
				title: 'Введение в машинное обучение',
				status: CourseStatus.NotStarted,
				type: undefined,
				description:
					'Познакомьтесь с ключевыми понятиями и методами машинного обучения.'
			},
			{
				contentItem: {
					id: 'task-5',
					title: 'Линейная регрессия',
					description:
						'Научитесь использовать линейную регрессию для прогнозирования.',
					difficulty: TaskDifficulty.Medium,
					microtasksQuantity: 2,
					status: TaskStatus.Active,
					privacy: TaskPrivacy.Public,
					communication: { teacher: 'Дмитрий Иванов', sutdentsComplete: 30 },
					dateAndTime: {
						dateOfCreation: '2024-05-01',
						timeToComplete: '2 часа',
						timeWhenCompletionStarted: '2024-05-01 11:00',
						timeWhenCompletionCompleted: undefined,
						deadline: '2024-05-03'
					},
					result: TaskResult.Completed
				},
				title: 'Линейная регрессия',
				status: CourseStatus.Active,
				type: TaskType.Code,
				description:
					'Научитесь использовать линейную регрессию для прогнозирования.'
			}
		],
		metadata: {
			teacher: 'Дмитрий Иванов',
			comments: 'Интересный курс для старта в ML.',
			creationDate: '2024-05-01'
		},
		progress: {
			itemsCompleted: 1,
			currentItem: {
				contentItem: {
					title: 'Введение в машинное обучение',
					content:
						'Познакомьтесь с ключевыми понятиями и методами машинного обучения.'
				},
				title: 'Введение в машинное обучение',
				status: CourseStatus.NotStarted,
				type: undefined,
				description:
					'Познакомьтесь с ключевыми понятиями и методами машинного обучения.'
			},
			itemsQuantity: 5
		},
		statistics: {
			studentsNow: 150,
			totalStudents: 400,
			averageCompletionTime: '3.5 часа',
			averageRating: 4.8
		},
		status: CourseStatus.InProgress,
		privacy: CoursePrivacy.Public
	}
]

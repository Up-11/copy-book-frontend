import {
	Course,
	CourseChapter,
	CoursePrivacy,
	CourseStatus
} from '../types/course.types'
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
			TaskType.WriteAnswer,
			TaskType.Theory
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
		const privacies = [
			TaskPrivacy.ForCourse,
			TaskPrivacy.Private,
			TaskPrivacy.Public
		]

		const answers = ['123', '234', '567', '123512', '12556234', '218657453']
		const variants = ['123', '234', '567', '123512', '12556234', '218657453']

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

		const baseDate = new Date('2025-01-01T00:00:00.000Z')
		const creationDate = new Date(baseDate)
		creationDate.setDate(creationDate.getDate() + index)

		const startDate = new Date(creationDate)
		startDate.setDate(startDate.getDate() + 5)

		const completionDate = new Date(startDate)
		completionDate.setDate(completionDate.getDate() + 5)

		const deadlineDate = new Date(completionDate)
		deadlineDate.setDate(deadlineDate.getDate() + 7)

		return {
			id: String(index),
			title: titles[index % titles.length],
			description: `
    ${index} Данная задача предназначена для изучения основ программирования через практические примеры.
    Вы сможете:
    - Понять ключевые концепции программирования, такие как переменные, циклы, условия и функции.
    - Освоить основные инструменты и подходы к решению задач.
    - Развить навыки логического мышления и структурированного подхода к работе с кодом.
    `,
			completedMicrotasks: 5,
			difficulty: difficulties[index % difficulties.length],
			type: types[index % types.length],
			deadline: deadlineDate.toISOString(),
			dateOfCreation: creationDate.toISOString(),
			timeToComplete: '5h',
			timeWhenCompletionStarted: startDate.toISOString(),
			timeWhenCompletionCompleted: completionDate.toISOString(),
			result: results[index % results.length],
			status: statuses[index % statuses.length],
			course: courses[index % courses.length],
			teacher: teachers[index % teachers.length],
			sutdentsComplete: 10,
			rating: 4,
			privacy: privacies[index % privacies.length],
			isDraft: true
		}
	}
)

export const courses: Course[] = [
	{
		courseId: '1',
		title: 'Introduction to Programming',
		description: 'Learn the basics of programming with practical examples.',
		chapters: [
			{
				id: 'chapter1',
				title: 'Introduction to Programming',
				chapterItems: [
					{
						id: 'task1',
						title: 'Basics of Programming',
						content:
							'Learn about variables, data types, and control structures.',
						type: TaskType.Theory
					},
					{
						id: 'task2',
						title: 'Conditional Statements',
						content: 'Understand if-else and switch-case statements.',
						type: TaskType.ChooseAnswer
					}
				]
			},
			{
				id: 'chapter2',
				title: 'Advanced Topics',
				chapterItems: [
					{
						id: 'task3',
						title: 'Object-Oriented Programming',
						content: 'Dive into classes, objects, and inheritance.',
						type: TaskType.Theory
					},
					{
						id: 'task4',
						title: 'Functional Programming',
						content:
							'Explore functions as first-class citizens and immutability.',
						type: TaskType.Code
					}
				]
			},
			{
				id: 'chapter3',
				title: 'Logic and Decisions',
				chapterItems: [
					{
						id: 'task5',
						title: 'Understanding Loops',
						content: 'Learn about for, while, and do-while loops.',
						type: TaskType.Theory
					}
				]
			}
		],

		metadata: {
			teacher: 'John Doe',
			comments: 'Great course for beginners.',
			creationDate: '2024-01-10'
		},
		code: 456332,
		progress: {
			chaptersQuantity: 1,
			itemsCompleted: 3,
			itemsQuantity: 5
		},
		statistics: {
			studentsNow: 200,
			averageRating: 4.5
		},
		status: CourseStatus.InProgress,
		privacy: CoursePrivacy.Public,
		isDraft: true
	},
	{
		courseId: '2',
		title: 'Advanced JavaScript',
		description: 'Deep dive into JavaScript, covering advanced topics.',
		chapters: [
			{
				id: 'chapter1',
				title: 'Introduction to Programming',
				chapterItems: [
					{
						id: 'task1',
						title: 'Basics of Programming',
						content:
							'Learn about variables, data types, and control structures.',
						type: TaskType.Theory
					},
					{
						id: 'task2',
						title: 'Conditional Statements',
						content: 'Understand if-else and switch-case statements.',
						type: TaskType.ChooseAnswer
					}
				]
			},
			{
				id: 'chapter2',
				title: 'Advanced Topics',
				chapterItems: [
					{
						id: 'task3',
						title: 'Object-Oriented Programming',
						content: 'Dive into classes, objects, and inheritance.',
						type: TaskType.Theory
					},
					{
						id: 'task4',
						title: 'Functional Programming',
						content:
							'Explore functions as first-class citizens and immutability.',
						type: TaskType.Code
					}
				]
			},
			{
				id: 'chapter3',
				title: 'Logic and Decisions',
				chapterItems: [
					{
						id: 'task5',
						title: 'Understanding Loops',
						content: 'Learn about for, while, and do-while loops.',
						type: TaskType.Theory
					}
				]
			}
		],

		metadata: {
			teacher: 'Jane Smith',
			comments: 'A very detailed course on JavaScript.',
			creationDate: '2024-02-01'
		},
		code: 123456,
		progress: {
			chaptersQuantity: 1,
			itemsCompleted: 4,
			itemsQuantity: 6
		},
		statistics: {
			studentsNow: 150,
			averageRating: 4.8
		},
		status: CourseStatus.InProgress,
		privacy: CoursePrivacy.Public
	}
]
export const courseChapters: CourseChapter[] = [
	{
		id: 'chapter1',
		title: 'Introduction to Programming',
		chapterItems: [
			{
				id: 'task1',
				title: 'Basics of Programming',
				description:
					'Learn about variables, data types, and control structures.',
				type: TaskType.Theory
			},
			{
				id: 'task2',
				title: 'Conditional Statements',
				description: 'Understand if-else and switch-case statements.',
				type: TaskType.ChooseAnswer,
				difficulty: TaskDifficulty.Hard
			}
		]
	},
	{
		id: 'chapter2',
		title: 'Advanced Topics',
		status: TaskStatus.Active,

		chapterItems: [
			{
				id: 'task3',
				title: 'Object-Oriented Programming',
				description: 'Dive into classes, objects, and inheritance.',
				type: TaskType.WriteAnswer,
				difficulty: TaskDifficulty.Hard
			},
			{
				id: 'task4',
				title: 'Functional Programming',
				description:
					'Explore functions as first-class citizens and immutability.',
				type: TaskType.Code,
				difficulty: TaskDifficulty.Hard
			}
		]
	},
	{
		id: 'chapter3',
		title: 'Logic and Decisions',
		chapterItems: [
			{
				id: 'task5',
				title: 'Understanding Loops',
				description: 'Learn about for, while, and do-while loops.',
				type: TaskType.Theory,
				status: TaskStatus.Closed,
				difficulty: TaskDifficulty.Hard
			},
			{
				id: 'task6',
				title: 'Understanding Loops',
				description: 'Learn about for, while, and do-while loops.',
				status: TaskStatus.Active,
				difficulty: TaskDifficulty.Hard
			}
		]
	}
]

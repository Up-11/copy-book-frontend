import { DashboardTaskProps, TaskDifficulty } from '../types/task.types'

export const dashboardTasks: DashboardTaskProps[] = [
	{
		id: '1',
		title: 'Learn TypeScript Basics',
		description: 'Complete the tutorial on TypeScript basics.',
		percentOfCompletion: 50,
		difficulty: TaskDifficulty.Simple,
		TaskCourse: 'simple JS',
		TaskCompletionDate: {
			dateOfCompletion: '2025-01-15T18:00:00Z'
		}
	},
	{
		id: '2',
		title: 'Build a Todo App',
		description:
			'Create a functional Todo application using React and TypeScript.',
		percentOfCompletion: 30,
		difficulty: TaskDifficulty.Medium,
		TaskCourse: 'Simple JS',
		TaskCompletionDate: {
			dateOfCompletion: '2025-01-20T23:59:59Z'
		}
	},
	{
		id: '3',
		title: 'Optimize Database Queries',
		description:
			'Analyze and optimize slow database queries for better performance.',
		percentOfCompletion: 70,
		difficulty: TaskDifficulty.Hard,
		TaskCourse: 'sioadjoasid JSJSJJS',
		TaskCompletionDate: {
			dateOfCompletion: '2025-02-01T12:00:00Z'
		}
	}
]

export enum TaskDifficulty {
	Hard = 'hard',
	Medium = 'medium',
	Simple = 'simple'
}

export enum TaskStatus {
	Pending = 'pending',
	Active = 'active',
	Closed = 'closed'
}

export enum TaskResult {
	Completed = 'completed',
	Failed = 'failed',
	TimeIsOver = 'time is over'
}

export enum TaskPrivacy {
	Public = 'public',
	Private = 'private',
	ForCourse = 'for course'
}

export type AnswerType = 'dragAndDrop' | 'writeAnswer' | 'chooseAnswer'
export type TaskType = 'code' | AnswerType

export type TaskCourse = string
export type TaskTeacher = string

export interface TaskCommunication {
	course: TaskCourse
	teacher: TaskTeacher
}

export interface TaskCreationDate {
	dateOfCreation: string
}

export interface TaskCompletionDate {
	dateOfCompletion?: string
}
export interface TaskTimeToComplete {
	timeToComplete: string
}
export interface TaskCompletionTimes {
	timeWhenCompletionStarted?: string
	timeWhenCompletionCompleted?: string
}
export interface TaskDateAndTime
	extends TaskCreationDate,
		TaskCompletionDate,
		TaskTimeToComplete,
		TaskCompletionTimes {}

export interface TaskBase {
	title: string
	description: string
	percentOfCompletion: number
}

export interface Task extends TaskBase {
	id: string
	difficulty: TaskDifficulty
	numberOfMicroTasks: number
	status: TaskStatus
	privacy: TaskPrivacy
	type: TaskType
	communication: TaskCommunication
	dateAndTime: TaskDateAndTime
	result?: TaskResult
}

export interface DashboardTaskProps extends TaskBase {
	id: string
	difficulty: TaskDifficulty
	TaskCourse: TaskCourse
	TaskCompletionDate: TaskCompletionDate
}

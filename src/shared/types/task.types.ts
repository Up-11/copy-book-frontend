export enum TaskDifficulty {
	Hard = 'hard',
	Medium = 'medium',
	Simple = 'simple'
}

export enum TaskStatus {
	Pending = 'pending',
	Active = 'active',
	Closed = 'closed',
	New = 'new',
	NotStarted = ''
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

export type TaskRating = number

export type AnswerType = 'dragAndDrop' | 'writeAnswer' | 'chooseAnswer'
export type TaskType = 'code' | AnswerType

export type TaskCourseType = string
export type TaskTeacher = string

export interface TaskCommunication {
	teacher?: TaskTeacher
	sutdentsComplete?: number
}

export interface TaskCreationDate {
	dateOfCreation: string
}

export type Deadline = string | Date

export interface TaskTimeToComplete {
	timeToComplete?: string
}
export interface TaskCompletionTimes {
	timeWhenCompletionStarted?: string
	timeWhenCompletionCompleted?: string
}
export interface TaskDateAndTime
	extends TaskCreationDate,
		TaskTimeToComplete,
		TaskCompletionTimes {
	deadline?: Deadline
}

export interface TaskBase {
	title: string
	description: string
}

export interface Task extends TaskBase {
	id: string
	difficulty: TaskDifficulty
	microtasksQuantity: number
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
	TaskCourse?: TaskCourseType
	microtasksQuantity: number
	completedMicrotasks?: number
	deadline?: Deadline
}

export interface TaskPageProps
	extends DashboardTaskProps,
		TaskDateAndTime,
		TaskCommunication {
	taskResult?: TaskResult
	taskStatus: TaskStatus
	taskRating: TaskRating
}

export interface TaskPopoverProps extends DashboardTaskProps {
	id: string
	taskStatus: TaskStatus
}

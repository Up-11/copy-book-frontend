export enum TaskDifficulty {
	Hard = 'hard',
	Medium = 'medium',
	Simple = 'simple'
}

export enum TaskStatus {
	Pending = 'pending',
	Active = 'active',
	Closed = 'closed',
	NotStarted = 'not startd'
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

export enum TaskType {
	Code = 'code',
	WriteAnswer = 'writeAnswer',
	ChooseAnswer = 'chooseAnswer',
	Theory = 'theory'
}

export type TaskCourseType = string
export type TaskTeacher = string

export interface TaskCommunication {
	teacher?: TaskTeacher
	sutdentsComplete?: number
}

export interface TaskCreationDate {
	dateOfCreation?: string
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
	description?: string
}
export interface Task extends TaskBase {
	id: string
	difficulty?: TaskDifficulty
	status?: TaskStatus
	privacy?: TaskPrivacy
	communication?: TaskCommunication
	dateAndTime?: TaskDateAndTime
	result?: TaskResult
	type: TaskType
	content?: string
	variants?: string[]
	answers?: string[]
	course?: TaskCourseType
	deadline?: string
	isDraft: boolean
}

export interface TaskProps
	extends TaskBase,
		TaskDateAndTime,
		TaskCommunication {
	id: string
	difficulty: TaskDifficulty
	course?: TaskCourseType
	deadline?: string
	result?: TaskResult
	status?: TaskStatus
	rating?: TaskRating
	type: TaskType
	content?: string
	privacy: TaskPrivacy
	isDraft: boolean
}

export type PartialIfTheory<T> = T extends { type: TaskType.Theory }
	? { [K in keyof T]?: T[K] } & {
			id: string
			title: string
			content: string
			type: TaskType.Theory
		}
	: T

export type CourseTheory = PartialIfTheory<Task>

// export interface TaskComplition extends TaskProps {}

import { Task, TaskStatus, TaskType } from './task.types'

export enum CourseStatus {
	NotStarted = 'not started',
	InProgress = 'in progress',
	Completed = 'completed',
	Archived = 'archived',
	Active = 'active'
}

export type CourseRating = number

export enum CoursePrivacy {
	Public = 'public',
	Private = 'private',
	Restricted = 'restricted'
}

export type CourseBase = {
	courseId: string
}

export type CourseTheory = {
	title: string
	content: string
}

export type CourseCode = number

export type CourseItem = {
	contentItem: CourseTheory | Task
	title: string
	status?: CourseStatus
	type?: TaskType
	description?: string
}

export interface CourseMetadata {
	teacher: string
	comments: string
	creationDate: string
	isByCode?: boolean
}

export interface CourseProgress {
	itemsCompleted: number
	currentItem: CourseItem
	itemsQuantity: number
	chaptersQuantity: number
}

export interface CourseStatistics {
	studentsNow: number
	averageRating: CourseRating
}

export type CourseChapter = {
	chapterItems: CourseItem[]
	title: string
	status: TaskStatus
}

export interface Course {
	courseId: string
	title: string
	description: string
	chapters: CourseChapter[]
	metadata: CourseMetadata
	progress: CourseProgress
	statistics: CourseStatistics
	status: CourseStatus
	privacy: CoursePrivacy
	code?: CourseCode
}

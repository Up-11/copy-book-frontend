// Тип для URL
import { routes } from '@/shared/config/routes'
import { Course } from '@/shared/types/course.types'
import { TaskProps } from '@/shared/types/task.types'
import { Url } from 'next/dist/shared/lib/router/router'

export interface ISidebar<T extends TaskProps[] | Course[]> {
	tabs: {
		value: string
		displayedName: string
		itemsList: T
	}[]
	mainTitle: string
	mainHref: keyof typeof routes | Url
}

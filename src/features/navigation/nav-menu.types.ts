import { TaskDifficulty } from '@/shared/types/task.types'

export type MenuItemType = {
	title: string
	description: string
	href: string
	icon?: React.ReactNode
	diff?: TaskDifficulty
}

export type MenuDataType = {
	items: MenuItemType[]
}

export interface MenuItemsProps {
	items: MenuItemType[]
	icon: React.ReactNode
	title: string
	tallItemHref: string
	description: string
}

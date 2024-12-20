import { routes } from '@/shared/config/routes'
import { MenuDataType } from './nav-menu.types'

export const menuDataStudent: MenuDataType[] = [
	{
		items: [
			{
				title: 'JavaScript для всех',
				description: 'Основы JavaScript',
				href: routes.home
			},
			{
				title: 'JavaScript для всех',
				description: 'Основы JavaScript',
				href: routes.dashboard.student
			},
			{
				title: 'JavaScript для всех',
				description: 'Основы JavaScript',
				href: routes.dashboard.student
			}
		]
	},

	{
		items: [
			{
				title: 'Без названия',
				description: 'Без описания',
				href: routes.dashboard.student
			},
			{
				title: 'Стрелочные функции',
				description: 'Без описания',
				href: routes.dashboard.student
			},
			{
				title: 'Асинхронные функции',
				description: 'Учу евент луп и асинхронные функции',
				href: routes.dashboard.student
			}
		]
	},
	{
		items: [
			{
				title: 'JavaScript для всех',
				description: 'Основы JavaScript',
				href: routes.dashboard.student
			},
			{
				title: 'JavaScript для всех',
				description: 'Основы JavaScript',
				href: routes.dashboard.student
			},
			{
				title: 'JavaScript для всех',
				description: 'Основы JavaScript',
				href: routes.dashboard.student
			}
		]
	}
]

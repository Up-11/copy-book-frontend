import { SidebarItemType } from './types'
import { routes } from '@/shared/config/routes'

export const sidebarItems: SidebarItemType[] = [
	{ title: 'Личные данные', link: routes.profile.personal },
	{ title: 'Настройки', link: routes.profile.settings },
	{ title: 'Статистика', link: routes.profile.statistic }
]

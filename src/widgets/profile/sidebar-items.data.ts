import { SidebarItemType } from './types'
import { routes } from '@/shared/config/routes'

export const sidebarItems: SidebarItemType[] = [
	{ title: 'Личные данные', link: routes.profile.personal },
	{ title: 'Безопасность', link: routes.profile.security },
	{ title: 'Настройки', link: routes.profile.settings },
	{ title: 'Статистика', link: routes.profile.statistic },
	{ title: 'Информация о аккаунте', link: routes.profile.accountInfo },
	{ title: 'Уведомления', link: routes.profile.notifications },
	{ title: 'История', link: routes.profile.history },
	{ title: 'Поддержка', link: routes.profile.support },
	{ title: 'Выход', link: routes.profile.logout }
]

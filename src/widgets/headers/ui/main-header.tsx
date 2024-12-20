import { UiNavigationMenu } from '@/features/navigation'
import { routes } from '@/shared/config/routes'
import { UiAvatar } from '@/shared/ui/custom/ui-avatar'
import { Button } from '@/shared/ui/other/button'
import { LogoWithRoleBadge } from '@/shared/ui/view/logo-with-role-badge'
import Text from '@/shared/ui/view/text'
import Link from 'next/link'
import React from 'react'

export const MainHeader: React.FC = () => {
	return (
		<header className='root-page-w mt-2 flex w-full items-center justify-between gap-1'>
			<div className='flex items-center gap-3'>
				<Link href={routes.dashboard.student}>
					<LogoWithRoleBadge role={'student'} hasLink={false} />
				</Link>
				<nav className='flex items-center max-md:hidden'>
					<UiNavigationMenu />
				</nav>
			</div>
			<div className='flex items-center gap-14'>
				<Button variant={'secondary'} className='max-md:hidden'>
					Добавиться к учителю
				</Button>
				<div className='flex items-center gap-1'>
					<Text size='small'>Иван Иванов</Text>
					<UiAvatar />
				</div>
			</div>
		</header>
	)
}

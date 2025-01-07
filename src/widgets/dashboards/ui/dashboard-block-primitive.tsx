import { UiLink } from '@/shared/ui/custom/ui-link'
import { Button } from '@/shared/ui/other/button'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import React from 'react'

export const DashboardBlockPrimitive: React.FC<{
	title: string
	description?: string
	children: React.ReactNode
	link?: string
	linkText?: string
}> = ({ children, title, description, link, linkText = 'Подробнее' }) => {
	return (
		<div className='w-full flex-col flex'>
			<header className='flex justify-between items-center'>
				<div>
					<Title size='medium'>{title}</Title>
					<Text size='small' color='gray'>
						{description}
					</Text>
				</div>
				{link && (
					<UiLink href={link}>
						<Button variant={'ghost'}>
							<Text size='small'>{linkText}</Text>
						</Button>
					</UiLink>
				)}
			</header>
			<div className='mt-4'>{children}</div>
		</div>
	)
}

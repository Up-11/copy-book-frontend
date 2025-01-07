import { SidebarItemType } from '../types'
import { cn } from '@/shared/lib/css'
import Text from '@/shared/ui/view/text'
import Link from 'next/link'
import React from 'react'

export const SidebarItem: React.FC<SidebarItemType> = ({
	title,
	link,
	isActive
}) => {
	return (
		<Link href={link}>
			<Text
				size='small'
				className={cn(
					' hover:bg-destructive transition-colors inline-flex p-2.5 w-full text-start rounded-lg',
					isActive && 'bg-secondary'
				)}
			>
				{title}
			</Text>
		</Link>
	)
}

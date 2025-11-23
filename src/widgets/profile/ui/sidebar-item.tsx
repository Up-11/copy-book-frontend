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
		<Link href={link} className='flex items-center justify-center gap-1'>
			{isActive && <div className='h-1/2 w-1 rounded-lg bg-indigo-400'></div>}
			<Text
				size='small'
				className={cn(
					'inline-flex w-full rounded-lg p-2 text-start transition-colors hover:bg-destructive',
					isActive && 'bg-destructive'
				)}
			>
				{title}
			</Text>
		</Link>
	)
}

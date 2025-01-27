'use client'

import { routes } from '@/shared/config/routes'
import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'
import { TaskStatus, TaskType } from '@/shared/types/task.types'
import { Separator } from '@/shared/ui/view/separator'
import Title from '@/shared/ui/view/title'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export const ExpandedChapterSidebar: React.FC<
	PropsWithClassName & {
		renderItems: () => React.ReactNode
		title: string
		isActive?: boolean
	}
> = ({ className, renderItems, title, isActive }) => {
	const [isExpanded, setIsExpanded] = useState(isActive ? true : false)

	return (
		<section className={cn(className)}>
			<button
				onClick={() => setIsExpanded(prev => !prev)}
				className='flex w-full cursor-default select-none items-center justify-between rounded-sm p-2 transition-colors hover:bg-accent'
			>
				<Title size='small' className='line-clamp-1'>
					{title}
				</Title>
				<ChevronDown
					size={16}
					className={cn('transition-transform', isExpanded && 'rotate-180')}
				/>
			</button>
			<AnimatePresence>
				{isExpanded && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.2, ease: 'easeInOut' }}
						className='overflow-hidden'
					>
						<div className='ml-4 flex gap-2'>
							<Separator orientation='vertical' />
							<div className='flex w-full flex-col gap-1'>{renderItems()}</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	)
}
export const ExpandedSidebarItem: React.FC<{
	title: string
	href: string
	id: string
	type?: TaskType
	status?: TaskStatus
}> = ({ title, href, id, type, status }) => {
	return (
		<Link
			href={routes.course.complitionCourse(id, href)}
			className={cn(
				'flex cursor-pointer select-none items-center justify-between rounded-sm p-2 text-sm transition-colors hover:bg-accent',
				status === TaskStatus.Closed && 'bg-green-50'
			)}
		>
			<p className='line-clamp-2 text-sm'>{title}</p>

			{type !== TaskType.Theory && status !== TaskStatus.Closed && (
				<span className='rounded-sm bg-indigo-100 p-1 text-xs text-muted-foreground'>
					Задача
				</span>
			)}
			{status === TaskStatus.Closed && (
				<span className='rounded-sm p-1 text-xs text-muted-foreground'>
					Оценка
				</span>
			)}
		</Link>
	)
}

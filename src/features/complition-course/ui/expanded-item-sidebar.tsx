'use client'

import { routes } from '@/shared/config/routes'
import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'
import { TaskType } from '@/shared/types/task.types'
import { Separator } from '@/shared/ui/view/separator'
import Title from '@/shared/ui/view/title'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export const ExpandedChapterSidebar: React.FC<
	PropsWithClassName & { renderItems: () => React.ReactNode; title: string }
> = ({ className, renderItems, title }) => {
	const [isExpanded, setIsExpanded] = useState(false)

	return (
		<section className={cn(className)}>
			<button
				onClick={() => setIsExpanded(prev => !prev)}
				className='flex w-full cursor-default select-none items-center justify-between rounded-sm p-2 transition-colors hover:bg-accent'
			>
				<Title size='small'>{title}</Title>
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
}> = ({ title, href, id, type }) => {
	return (
		<Link
			href={routes.course.complitionCourse(id, href)}
			className='flex cursor-pointer select-none items-center justify-between rounded-sm p-2 text-sm transition-colors hover:bg-accent'
		>
			{title}

			{type !== TaskType.Theory && <div>TASK</div>}
		</Link>
	)
}

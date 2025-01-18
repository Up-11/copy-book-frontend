'use client'

import { dashboardTasks } from '../../../shared/mock/mock'
import { SortPopover } from './sort-popover'
import { TaskList } from './task-list'
import { SearchBar } from '@/entities/search/ui/searchbar'
import { routes } from '@/shared/config/routes'
import { TaskStatus } from '@/shared/types/task.types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/view/tabs'
import Title from '@/shared/ui/view/title'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

export const UserTasksSidebar: React.FC = () => {
	const [activeTab, setActiveTab] = useState<'active' | 'archive'>('active')

	const tabContentVariants = {
		initial: { opacity: 0, y: 10 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -10 }
	}

	return (
		<div className='p-layout'>
			<div className='ml-2 flex items-center justify-between'>
				<Link href={routes.tasks.student}>
					<Title>Ваши задания</Title>
				</Link>
				<SortPopover />
			</div>
			<div className='ml-2 my-2 flex items-center justify-end'>
				<SearchBar />
			</div>
			<Tabs defaultValue={activeTab}>
				<TabsList className='relative w-full flex bg-destructive rounded-lg overflow-hidden'>
					<motion.div
						layoutId='tab-highlight'
						className='absolute top-0 left-0 h-full bg-indigo-300 rounded-lg'
						style={{
							width: `${100 / 2}%`
						}}
						initial={false}
						animate={{
							transform: `translateX(${activeTab === 'active' ? 0 : 100}%)`
						}}
						transition={{
							type: 'spring',
							stiffness: 900,
							damping: 50
						}}
					/>
					<TabsTrigger
						value='active'
						onClick={() => setActiveTab('active')}
						className='relative !shadow-none z-10 flex-1 text-center py-2 !bg-transparent'
					>
						Активные
					</TabsTrigger>
					<TabsTrigger
						value='archive'
						onClick={() => setActiveTab('archive')}
						className='relative !shadow-none z-10 flex-1 text-center py-2 !bg-transparent'
					>
						Архив
					</TabsTrigger>
				</TabsList>
				<div className='relative'>
					<AnimatePresence mode='popLayout'>
						{activeTab === 'active' && (
							<motion.div
								key='active'
								variants={tabContentVariants}
								initial='initial'
								animate='animate'
								exit='exit'
								transition={{ duration: 0.3 }}
							>
								<TabsContent value='active'>
									<TaskList
										items={dashboardTasks.filter(
											task =>
												task.taskStatus !== TaskStatus.Closed &&
												task.taskStatus !== TaskStatus.NotStarted
										)}
									/>
								</TabsContent>
							</motion.div>
						)}
						{activeTab === 'archive' && (
							<motion.div
								key='archive'
								variants={tabContentVariants}
								initial='initial'
								animate='animate'
								exit='exit'
								transition={{ duration: 0.3 }}
							>
								<TabsContent value='archive'>
									<TaskList
										items={dashboardTasks.filter(
											task => task.taskStatus === TaskStatus.Closed
										)}
									/>
								</TabsContent>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</Tabs>
		</div>
	)
}

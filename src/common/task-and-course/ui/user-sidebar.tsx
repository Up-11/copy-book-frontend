'use client'

import { ISidebar } from '../types'
import { SidebarList } from './sidebar-list'
import { SearchBar } from '@/entities/search/ui/searchbar'
import { Filters } from '@/features/filter'
import { Course } from '@/shared/types/course.types'
import { TaskProps } from '@/shared/types/task.types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/view/tabs'
import Title from '@/shared/ui/view/title'
import { motion, AnimatePresence, Variants } from 'motion/react'
import Link from 'next/link'
import React, { useState } from 'react'

export const UserSidebar = <T extends TaskProps[] | Course[]>({
	tabs,
	mainHref,
	mainTitle,
	isTask
}: ISidebar<T & { isTask?: boolean }>) => {
	{
		type TabValue = (typeof tabs)[number]['value']

		const [activeTab, setActiveTab] = useState<TabValue>(tabs[0]?.value || '')

		const tabContentVariants: Variants = {
			initial: { opacity: 0, y: 10 },
			animate: { opacity: 1, y: 0 },
			exit: { opacity: 0, y: -10 }
		}

		const motionConfig = {
			layoutId: 'tab-highlight',
			className: 'absolute top-0 left-0 h-full bg-indigo-200 rounded-lg',
			style: (tabsLength: number) => ({
				width: `${100 / tabsLength}%`
			}),
			initial: false,
			transition: {
				type: 'spring',
				stiffness: 900,
				damping: 50
			},
			animate: (index: number) => ({
				transform: `translateX(${index * 100}%)`
			})
		}

		const activeTabIndex = tabs.findIndex(tab => tab.value === activeTab)

		return (
			<div className='p-layout h-full'>
				<div className='ml-2 flex items-center justify-between'>
					<Link href={mainHref}>
						<Title>{mainTitle}</Title>
					</Link>
					<Filters isTask={isTask!} isSidebar />
				</div>
				<div className='ml-2 my-2 flex items-center justify-end'>
					<SearchBar />
				</div>
				<Tabs defaultValue={activeTab}>
					<TabsList className='relative w-full flex bg-accent rounded-lg overflow-hidden'>
						<motion.div
							layoutId={motionConfig.layoutId}
							className={motionConfig.className}
							style={motionConfig.style(tabs.length)}
							initial={motionConfig.initial}
							animate={motionConfig.animate(activeTabIndex)}
							transition={motionConfig.transition}
						/>
						{tabs.map(tab => (
							<TabsTrigger
								key={tab.value}
								value={tab.value}
								onClick={() => setActiveTab(tab.value)}
								className='relative !shadow-none z-10 flex-1 text-center py-2 !bg-transparent'
							>
								{tab.displayedName}
							</TabsTrigger>
						))}
					</TabsList>
					<div className='relative'>
						<AnimatePresence mode='sync'>
							{tabs.map(tab => (
								<TabsContent key={tab.value} value={tab.value}>
									{activeTab === tab.value && (
										<motion.div
											variants={tabContentVariants}
											initial='initial'
											animate='animate'
											exit='exit'
											transition={{ duration: 0.3 }}
										>
											<SidebarList items={tab.itemsList} />
										</motion.div>
									)}
								</TabsContent>
							))}
						</AnimatePresence>
					</div>
				</Tabs>
			</div>
		)
	}
}

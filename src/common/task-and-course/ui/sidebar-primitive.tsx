'use client'

import { useSidebar } from '../model/use-sidebar'
import { SearchBar } from '@/entities/search/ui/searchbar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/view/tabs'
import { motion, AnimatePresence } from 'motion/react'

interface ISidebarPrimitiveProps<
	T extends { value: string; displayedName: string }
> {
	renderHeader: React.ReactNode
	sidebarList: (tab: T) => React.ReactNode
	tabs: T[]
}

export const SidebarPrimitive = <
	T extends { value: string; displayedName: string }
>({
	renderHeader,
	sidebarList,
	tabs
}: ISidebarPrimitiveProps<T>) => {
	const {
		activeTab,
		activeTabIndex,
		motionConfig,
		setActiveTab,
		tabContentVariants
	} = useSidebar<T>(tabs)

	return (
		<div className='h-full p-layout'>
			<div className='ml-2 flex items-center justify-between'>
				{renderHeader}
			</div>
			<div className='my-2 ml-2 flex items-center justify-end'>
				<SearchBar />
			</div>
			<Tabs defaultValue={activeTab}>
				<TabsList className='relative flex w-full overflow-hidden rounded-lg bg-accent'>
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
							className='relative z-10 flex-1 !bg-transparent py-2 text-center !shadow-none'
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
										{sidebarList(tab)}
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

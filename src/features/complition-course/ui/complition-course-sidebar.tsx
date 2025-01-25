'use client'

import {
	ExpandedChapterSidebar,
	ExpandedSidebarItem
} from './expanded-item-sidebar'
import { courseChapters } from '@/shared/mock/mock'
import { ScrollArea } from '@/shared/ui/other/scroll-area'
import Title from '@/shared/ui/view/title'
import React from 'react'

export const ComplitionCourseSidebar: React.FC<{ courseId: string }> = ({
	courseId
}) => {
	return (
		<aside className='fixed bottom-1 top-16 flex w-80 flex-col gap-3 p-layout'>
			<Title>Секции</Title>
			<ScrollArea>
				<div className='h-full'>
					{courseChapters.map(chapter => (
						<ExpandedChapterSidebar
							key={chapter.id}
							title={chapter.title}
							renderItems={() =>
								chapter.chapterItems.map(item => (
									<ExpandedSidebarItem
										id={courseId}
										key={item.id}
										title={item.title}
										href={item.id}
										type={item.type}
									/>
								))
							}
						/>
					))}
				</div>
			</ScrollArea>
		</aside>
	)
}

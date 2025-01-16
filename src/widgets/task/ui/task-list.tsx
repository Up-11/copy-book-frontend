import { SidebarTask } from '@/entities/task'
import { useLastPathnameElement } from '@/shared/lib/hooks/use-last-pathname-element'
import { DashboardTaskProps } from '@/shared/types/task.types'
import { ScrollArea } from '@/shared/ui/other/scroll-area'
import React from 'react'

export const TaskList: React.FC<{ items: DashboardTaskProps[] }> = ({
	items
}) => {
	const { currentPage } = useLastPathnameElement()
	return (
		<ScrollArea>
			<div className='screen-no-header flex flex-col gap-1'>
				{items.map(task => (
					<SidebarTask
						id={task.id}
						deadline={task.deadline}
						description={task.description}
						key={task.id}
						title={task.title}
						difficulty={task.difficulty}
						isActive={task.id === currentPage}
					/>
				))}
			</div>
		</ScrollArea>
	)
}

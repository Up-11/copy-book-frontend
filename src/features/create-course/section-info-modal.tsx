import { CourseChapter } from '@/shared/types/course.types'
import { Input } from '@/shared/ui/input/input'
import { Button } from '@/shared/ui/other/button'
import { ScrollArea } from '@/shared/ui/other/scroll-area'
import { Plus } from 'lucide-react'
import React from 'react'

export const SectionInfoModal: React.FC<{ item: CourseChapter }> = ({
	item
}) => {
	return (
		<div className='flex max-h-[350px] flex-col gap-4'>
			<Input placeholder='Изменение секции' defaultValue={item.title} />
			<div>Задания</div>
			<ScrollArea className='r flex h-2/4 min-h-[200px] w-full flex-col gap-2'>
				<div>1</div>
				<div>1</div>
				<div>1</div>
				<div>1</div>
				<div>1</div>
				<div>1</div>
				<div>1</div>
				<div>1</div>
				<div>1</div>
				<div>1</div>
				<div className='flex justify-center'>
					<Button size={'icon'} variant={'destructive'}>
						<Plus />
					</Button>
				</div>
			</ScrollArea>
			<Button>Добавить</Button>
		</div>
	)
}

'use client'

import { useTaskCreation } from '../model/use-task-creation'
import { AddToCoursePopover } from './add-to-course-popover'
import { difficultyFilter } from '@/features/filter/filter.data'
import { SwitchItem } from '@/features/filter/ui/switch-item'
import { cn } from '@/shared/lib/css'
import { getBadgeByTaskDifficulty } from '@/shared/lib/map'
import { TaskDifficulty } from '@/shared/types/task.types'
import { UiCheckbox } from '@/shared/ui/custom/ui-checkbox'
import { Input } from '@/shared/ui/input/input'
import { Label } from '@/shared/ui/input/label'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/shared/ui/modals/popover'
import { Button } from '@/shared/ui/other/button'
import { Separator } from '@/shared/ui/view/separator'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export const CreationMainData: React.FC = () => {
	const { getters, setters } = useTaskCreation()
	console.log(getters)
	//TODO: ADD DEBOUNCE

	const difficulty =
		getters.difficulty && getBadgeByTaskDifficulty(getters.difficulty)

	return (
		<div className=''>
			<div className='my-4 flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<Label className='text-lg' htmlFor='title'>
						Название
					</Label>
					<Input
						id='title'
						onChange={setters.title}
						placeholder='Например: "JavaScript для начинающих"'
						className='w-80'
						defaultValue={getters.title || ''}
					/>
				</div>
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant={'secondary'}
							className={cn(difficulty?.classNames, 'w-40')}
							size={'sm'}
						>
							{difficulty?.text || 'Выбрать сложность'}
						</Button>
					</PopoverTrigger>
					<PopoverContent className='w-36 p-1' arrowPadding={4}>
						{difficultyFilter.map(item => (
							<SwitchItem
								wrapperClassName='w-full'
								key={item.value}
								isActive={item.value === getters.difficulty}
								onClick={() => setters.diff(item.value as TaskDifficulty)}
							>
								{item.text}
							</SwitchItem>
						))}
					</PopoverContent>
				</Popover>
			</div>
			<Separator className='my-4' />
			<div className='flex items-center justify-between'>
				<div className='flex flex-col gap-2'>
					<div>
						<AddToCoursePopover>
							<Button disabled={getters.anonymus}>
								Добавить в курс <ArrowRight />
							</Button>
						</AddToCoursePopover>
					</div>
				</div>
				<Separator orientation='vertical' className='h-14' />
				<div className='flex flex-col gap-1'>
					<UiCheckbox
						text='Опубликовать анонимно'
						onCheckedChange={setters.anonimus}
						value='anonymous'
					/>
				</div>
			</div>
			<Separator className='my-4' />
			{!getters.anonymus && (
				<div className='grid grid-cols-2'>
					<div className='flex flex-col'>
						<Title className='font-bold'>Курс</Title>
						<Text color='gray'>{getters.course.title || 'Не выбрано'}</Text>
					</div>
					<div className='flex flex-col'>
						<Title className='font-bold'>Секция</Title>
						<Text color='gray'>{getters.course.chapter || 'Не выбрано'}</Text>
					</div>
				</div>
			)}
		</div>
	)
}

'use client'

import { AddToCoursePopover } from './add-to-course-popover'
import { difficultyFilter } from '@/features/filter/filter.data'
import { SwitchItem } from '@/features/filter/ui/switch-item'
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
import { ArrowRight } from 'lucide-react'
import React from 'react'

export const CreationMainData: React.FC = () => {
	return (
		<div className=''>
			<div className='my-4 flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<Label className='text-lg' htmlFor='title'>
						Название
					</Label>
					<Input
						id='title'
						placeholder='Например: "JavaScript для начинающих"'
						className='w-80'
					/>
				</div>
				<Popover>
					<PopoverTrigger asChild>
						<Button variant={'secondary'} size={'sm'}>
							Выбрать сложность
						</Button>
					</PopoverTrigger>
					<PopoverContent className='w-36 p-1' arrowPadding={4}>
						{difficultyFilter.map(item => (
							<SwitchItem
								wrapperClassName='w-full'
								key={item.value}
								onClick={() => {}}
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
					<AddToCoursePopover>
						<Button>
							Добавить в курс <ArrowRight />
						</Button>
					</AddToCoursePopover>
					<Separator />
					<div className='flex gap-1'>
						<Text size='extraSmall'>Выбран:</Text>
						<Text size='extraSmall' className='font-bold'>
							Основы Js
						</Text>
					</div>
				</div>
				<Separator orientation='vertical' className='h-14' />
				<div className='flex flex-col gap-1'>
					<UiCheckbox text='Опубликовать анонимно' value='anonymous' />
				</div>
			</div>
		</div>
	)
}

'use client'

import { useTaskCreation } from '../model/use-task-creation'
import { CreationMainData } from './creation-main-data'
import { CreationTaskDescription } from './creation-task-description'
import { CreationTaskTypeAndAnswer } from './task-type/creation-task-type-and-answer'
import { isObjectFilled } from '@/shared/lib/utils'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/shared/ui/accordion'
import { Button } from '@/shared/ui/other/button'
import React from 'react'

export const TaskCreation: React.FC = () => {
	const { getters } = useTaskCreation()

	return (
		<div className='flex h-full flex-col'>
			<Accordion type='single' collapsible>
				<AccordionItem value='item-1'>
					<AccordionTrigger className='text-lg'>
						Шаг 1: Основные данные
					</AccordionTrigger>
					<AccordionContent>
						<CreationMainData />
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-2'>
					<AccordionTrigger className='text-lg'>
						Шаг 2: Описание
					</AccordionTrigger>
					<AccordionContent>
						<CreationTaskDescription />
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-3'>
					<AccordionTrigger className='text-lg'>
						Шаг 3: Тип задания и ответ
					</AccordionTrigger>
					<AccordionContent>
						<CreationTaskTypeAndAnswer />
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<div className='mt-auto flex items-center justify-between gap-5'>
				<Button>Сохранить в черновике</Button>
				<Button disabled={!isObjectFilled(getters, ['course'])}>
					Опубликовать
				</Button>
			</div>
		</div>
	)
}

'use client'

import { CourseCreationDescription } from './course-creation-description'
import { CourseCreationMainData } from './course-creation-main-data'
import { CourseCreationSectionsAndTasks } from './course-creation-sections-and-tasks'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/shared/ui/accordion'
import { Button } from '@/shared/ui/other/button'
import React from 'react'

export const CourseCreation: React.FC = () => {
	return (
		<div className='flex h-full flex-col'>
			<Accordion type='single' collapsible>
				<AccordionItem value='item-1'>
					<AccordionTrigger className='text-lg'>
						Шаг 1: Основные данные
					</AccordionTrigger>
					<AccordionContent>
						<CourseCreationMainData />
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-2'>
					<AccordionTrigger className='text-lg'>
						Шаг 2: Описание
					</AccordionTrigger>
					<AccordionContent>
						<CourseCreationDescription />
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-3'>
					<AccordionTrigger className='text-lg'>
						Шаг 3: Секции и задания
					</AccordionTrigger>
					<AccordionContent>
						<CourseCreationSectionsAndTasks />
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<div className='mt-auto flex items-center justify-between gap-5'>
				<Button>Сохранить в черновике</Button>
				{/* <Button disabled={!isObjectFilled(getters, ['course'])}>
					Опубликовать
				</Button> */}
			</div>
		</div>
	)
}

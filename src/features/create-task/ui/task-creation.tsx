import { CreationMainData } from './creation-main-data'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/shared/ui/accordion'
import { Button } from '@/shared/ui/other/button'
import React from 'react'

export const TaskCreation: React.FC = () => {
	return (
		<div className='flex h-full flex-col'>
			<Accordion type='single' defaultValue='item-1' collapsible>
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
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-3'>
					<AccordionTrigger className='text-lg'>
						Шаг 3: Тип задания и ответ
					</AccordionTrigger>
					<AccordionContent>
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<div className='mt-auto flex items-center justify-between gap-5'>
				<Button>Сохранить в черновике</Button>
				<Button>Опубликовать</Button>
			</div>
		</div>
	)
}

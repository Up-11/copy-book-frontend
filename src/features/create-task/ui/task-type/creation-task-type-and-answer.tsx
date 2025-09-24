import { useTaskCreation } from '../../model/use-task-creation'
import { DynamicTypeComponent } from './dynamic-type-component'
import { TaskType } from '@/shared/types/task.types'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/shared/ui/input/select'
import Title from '@/shared/ui/view/title'
import React from 'react'

export const CreationTaskTypeAndAnswer: React.FC = () => {
	const { setters, getters } = useTaskCreation()
	return (
		<section className='m-2'>
			<div className='flex items-center justify-between'>
				<Title>Выберите тип задания</Title>
				<Select onValueChange={setters.type}>
					<SelectTrigger className='w-[180px]'>
						<SelectValue placeholder='Тип задания' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Тип</SelectLabel>

							<SelectItem value={TaskType.ChooseAnswer}>
								Выбор ответа
							</SelectItem>
							<SelectItem value={TaskType.Code}>Код</SelectItem>
							<SelectItem value={TaskType.Theory}>Теория</SelectItem>
							<SelectItem value={TaskType.WriteAnswer}>
								Написание ответа
							</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div>
				<DynamicTypeComponent type={getters.type} />
			</div>
		</section>
	)
}

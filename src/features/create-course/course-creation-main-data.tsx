import { UiCheckbox } from '@/shared/ui/custom/ui-checkbox'
import { UiInputOtp } from '@/shared/ui/custom/ui-input-otp'
import { Input } from '@/shared/ui/input/input'
import { Label } from '@/shared/ui/input/label'
import { Button } from '@/shared/ui/other/button'
import { Separator } from '@/shared/ui/view/separator'
import Title from '@/shared/ui/view/title'
import React from 'react'

export const CourseCreationMainData: React.FC = () => {
	return (
		<div>
			<div className='flex items-center gap-4'>
				<Label className='text-lg' htmlFor='title'>
					Название курса
				</Label>
				<Input
					id='title'
					placeholder='Например: "JavaScript для начинающих"'
					className='w-80'
				/>
			</div>
			<Separator className='my-4' />
			<div className='flex flex-col gap-1'>
				<UiCheckbox text='Сделать доступ по коду курса' value='anonymous' />
			</div>
			<div className='ml-3 mt-2'>
				<Title>Код курса</Title>
				<div className='flex gap-2'>
					<UiInputOtp disabled />
					<Button variant='primary'>Сгенерировать код</Button>
				</div>
			</div>
		</div>
	)
}

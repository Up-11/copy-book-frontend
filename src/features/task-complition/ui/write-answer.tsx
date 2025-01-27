import { Textarea } from '@/shared/ui/input/textarea'
import Title from '@/shared/ui/view/title'
import React from 'react'

export const WriteAnswer: React.FC = () => {
	return (
		<div className='flex flex-col gap-2'>
			<Title>Напишите свой ответ</Title>
			<Textarea
				className='resize-none'
				rows={6}
				placeholder='Напишите свой ответ'
			/>
		</div>
	)
}

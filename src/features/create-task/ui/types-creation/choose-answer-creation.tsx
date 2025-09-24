import { cn } from '@/shared/lib/css'
import { Input } from '@/shared/ui/input/input'
import { Button } from '@/shared/ui/other/button'
import { Check, EditIcon } from 'lucide-react'
import React, { useState } from 'react'

export const ChooseAnswerCreation: React.FC = () => {
	const [list, setList] = useState([
		{ text: '1', value: '1', isAnswer: true, isEditing: false },
		{ text: '3', value: '3', isAnswer: false, isEditing: false },
		{ text: '4', value: '4', isAnswer: false, isEditing: false },
		{ text: '2', value: '2', isAnswer: false, isEditing: false }
	])

	const setIsAnswer = (value: string) => {
		setList(prevList =>
			prevList.map(item =>
				item.value === value ? { ...item, isAnswer: !item.isAnswer } : item
			)
		)
	}
	const editAnswerText = (value: string, text: string) => {
		setList(prevList =>
			prevList.map(item => (item.value === value ? { ...item, text } : item))
		)
	}
	const setIsEditing = (value: string) => {
		setList(prevList =>
			prevList.map(item =>
				item.value === value ? { ...item, isEditing: !item.isEditing } : item
			)
		)
	}
	return (
		<div className='flex flex-col gap-2'>
			{list.map((item, index) => (
				<h3 key={index} className='mt-2 flex items-center gap-2'>
					{item.isEditing ? (
						<Input
							type='text'
							value={item.text}
							onChange={e => editAnswerText(item.value, e.target.value)}
						/>
					) : (
						item.text
					)}
					<div className='ml-auto flex gap-2'>
						<Button size={'icon'} onClick={() => setIsEditing(item.value)}>
							<EditIcon />
						</Button>
						<Button
							size={'icon'}
							className={cn(item.isAnswer ? 'text-green-500' : 'text-red-500')}
							onClick={() => setIsAnswer(item.value)}
						>
							<Check />
						</Button>
					</div>
				</h3>
			))}
		</div>
	)
}

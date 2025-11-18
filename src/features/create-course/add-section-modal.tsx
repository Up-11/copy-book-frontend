import { Input } from '@/shared/ui/input/input'
import { Button } from '@/shared/ui/other/button'
import React from 'react'

export const AddSectionModal: React.FC = () => {
	return (
		<div className='flex flex-col gap-4'>
			<Input placeholder='Название секции' />
			<Button>Добавить</Button>
		</div>
	)
}

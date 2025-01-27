import { Drawer } from '@/shared/ui/modals/drawer'
import { Button } from '@/shared/ui/other/button'
import Title from '@/shared/ui/view/title'
import React from 'react'

export const CodeAnswer: React.FC = () => {
	return (
		<div className='flex flex-col gap-2'>
			<Title>Откройте редактор кода для выполнения задания</Title>
			<Drawer content={<div>Редактор кода</div>}>
				<Button variant={'primary'} className='self-start'>
					Открыть
				</Button>
			</Drawer>
		</div>
	)
}

import Text from '@/shared/ui/view/text'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
	title: 'Ваши задания'
}
export default function TasksPage() {
	return (
		<div className='p-layout flex justify-center items-center'>
			<div className='flex flex-col items-center'>
				<Image
					className='w-48'
					src={'/assets/approve.png'}
					width={400}
					height={400}
					alt='approve'
				/>
				<Text>Выберите необходимое задание</Text>
			</div>
		</div>
	)
}

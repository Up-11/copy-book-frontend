import { routes } from '@/shared/config/routes'
import { Button } from '@/shared/ui/other/button'
import Text from '@/shared/ui/view/text'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
	title: 'Ваши курсы'
}
export default function CoursePage() {
	return (
		<div className='p-layout flex justify-center items-center page-h'>
			<div className='flex flex-col items-center'>
				<Image
					className='w-48'
					src={'/assets/approve.png'}
					width={400}
					height={400}
					alt='approve'
				/>
				<Text>Выберите необходимиый курс</Text>
				<Text>Или</Text>
				<Link href={routes.course.main}>
					<Button
						variant={'link'}
						className='text-indigo-600 text-xl hover:text-indigo-800'
					>
						Найдите его в списке всех курсов
					</Button>
				</Link>
			</div>
		</div>
	)
}

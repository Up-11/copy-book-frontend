'use client'

import { Button } from '@/shared/ui/other/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function NotFound() {
	const router = useRouter()
	return (
		<div className='w-full h-screen mx-auto flex justify-center items-center bg-background'>
			<div className='text-center'>
				<Image
					src='/assets/not-found-task.png'
					alt='Not Found'
					width={300}
					height={300}
					className='mb-4'
				/>
				<h1 className='text-2xl font-bold mb-4'>Страница не найдена</h1>
				<p className='mb-4'>Вы скорее всего попали сюда случайно </p>
				<Button onClick={router.back}>Уходите</Button>
			</div>
		</div>
	)
}

import { cn } from '@/shared/lib/css'
import { Button } from '@/shared/ui/other/button'
import { Skeleton } from '@/shared/ui/other/skeleton'
import { ListElement } from '@/shared/ui/view/list-element'
import Title from '@/shared/ui/view/title'
import Link from 'next/link'
import React from 'react'

interface IWhiteBlockProps {
	className?: string
	title: string
	list: string[]
	reversed?: boolean
	link: string
}
export const WhiteBlock: React.FC<IWhiteBlockProps> = ({
	className,
	title,
	list,
	reversed,
	link,
}) => {
	return (
		<div
			className={cn(
				'bg-white p-layout flex max-md:flex-col max-md:items-center justify-around rounded-3xl',
				className
			)}
		>
			{/* Текстовый блок */}
			
			<div
				className={cn(
					'flex justify-start flex-col md:w-1/2 p-12 max-md:p-6',
					reversed ? 'order-2' : 'order-1'
				)}
			>
				<Title className='text-start' size='large'>
					{title}
				</Title>
				<ul className='mt-5 text-start flex-col gap-2 flex'>
					{list.map((item, index) => (
						<ListElement key={index} item={item} />
					))}
				</ul>
				<div className='flex justify-start items-start mt-4'>
					<Link href={link}>
						<Button size={'lg'} variant={'destructive'}>
							Попробовать
						</Button>
					</Link>
				</div>
			</div>

			{/* Блок Skeleton */}
			<div
				className={cn(
					'flex justify-center md:w-1/2 items-center max-md:order-2',
					reversed ? 'order-1' : 'order-2'
				)}
			>
				<Skeleton className='h-[300px] w-[500px] max-md:h-[200px] max-md:w-[300px] max-sm:h-[100px] max-sm:w-[200px]' />
			</div>
		</div>
	)
}

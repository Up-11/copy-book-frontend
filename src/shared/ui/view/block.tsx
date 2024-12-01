import { cn } from '@/shared/lib/css'
import { cva } from 'class-variance-authority'
import Image from 'next/image'
import React from 'react'
import Title from '../view/title'
import Link from 'next/link'
import { ArrowUpRightIcon } from 'lucide-react'
import Text from './text'

type BlockColors = 'white' | 'grey' | 'purple' | 'blue' | 'orange'
type BlockSizes = 'extraLarge' | 'large' | 'small' | 'medium' | 'slim'

const BlockVariants = cva('rounded-lg  ', {
	variants: {
		size: {
			small:
				' lg:w-[250px] xl:w-[300px] sm:w-full lg:h-[170px] max-sm:h-auto rounded-3xl',
			slim: ' rounded-3xl ',
			medium: 'w-[400px] w-full ',
			large: ' h-[300px] max-sm:w-full   rounded-3xl',
			extraLarge: 'w-full min-h-[520px] rounded-3xl',
		},
		color: {
			white: 'bg-white ',
			grey: 'bg-gray-100 ',
			purple: 'bg-purple-100',
			blue: 'bg-sky-100 ',
			orange: 'bg-orange-500 ',
		},
	},
	defaultVariants: {
		size: 'medium',
		color: 'white',
	},
})

interface IBlockProps {
	className?: string
	children?: React.ReactNode
	color?: BlockColors
	title?: string
	description?: string
	size?: BlockSizes
	icon?: React.ReactNode
	link?: string
	imageUrl?: string
	customImageClasses?: string
	imageSizes?: string
}

export const Block: React.FC<IBlockProps> = ({
	className,
	color,
	size,
	children,
}) => {
	return (
		<section
			className={cn(BlockVariants({ className, color, size }), className)} // добавим className для корректного комбинирования
		>
			{children}
		</section>
	)
}

export const BlockLinkSmall: React.FC<IBlockProps> = ({
	className,
	color,
	size,
	icon,
	description,
	link,
}) => {
	const SectionContent = () => (
		<Block
			className={cn(
				BlockVariants({ className, color, size }),
				'grid grid-cols-12   items-start p-4 relative'
			)}
		>
			{icon && (
				<div className='col-span-3 flex items-center justify-center p-2'>
					{icon}
				</div>
			)}

			<div className='col-span-7 flex flex-col gap-3'>
				<Text size='medium'>{description}</Text>
			</div>

			{link && (
				<div className='col-span-2 flex items-center  '>
					<ArrowUpRightIcon size={40} />
				</div>
			)}
		</Block>
	)

	return link ? <Link href={link}>{SectionContent()}</Link> : SectionContent()
}

export const BlockLinkVertical: React.FC<IBlockProps> = ({
	className,
	color,
	size,
	imageUrl,
	title,
	description,
	customImageClasses,
	imageSizes,
	link,
}) => {
	const SectionContent = () => (
		<Block
			className={cn(
				BlockVariants({ className, color, size }),
				'grid grid-rows-2 grid-cols-2 gap-4 items-start relative h-full'
			)}
		>
			<div className='grid grid-rows-[auto_1fr] grid-cols-3 col-span-2 row-span-1 gap-1 p-layout'>
				<Title className='font-semibold col-span-3 col-start-1 row-start-1 '>
					{title}
				</Title>

				{link && (
					<div className='col-span-3 row-span-1 row-start-1 flex justify-end justify-self-end content-start items-start '>
						<ArrowUpRightIcon size={40} />
					</div>
				)}

				<Text size='small' className='col-span-5'>
					{description}
				</Text>
			</div>

			{imageUrl && (
				<div
					className={cn(
						'col-span-2 row-span-4  flex justify-end items-end justify-self-end self-end',
						customImageClasses
					)}
				>
					<div className={cn('lg:w-[300px] max-w-[300px]', imageSizes)}>
						<Image
							src={imageUrl}
							width={500}
							height={500}
							alt={title || 'image'}
							className='object-cover rounded-br-3xl h-full w-full'
						/>
					</div>
				</div>
			)}
		</Block>
	)

	// Условие для ссылки
	return link ? (
		<Link href={link} className='block hover:opacity-90 transition-opacity'>
			{SectionContent()}
		</Link>
	) : (
		SectionContent()
	)
}

export const BlockLink: React.FC<IBlockProps> = ({
	className,
	color,
	size,
	imageUrl,
	title,
	description,
	customImageClasses,
	imageSizes,
	link,
}) => {
	// Содержимое с ссылкой
	const SectionContentWithLink = () => (
		<Block className={cn(BlockVariants({ className, color, size }))}>
			<Link
				className='grid grid-cols-12 grid-rows-2 gap-4 items-start relative w-full h-full'
				href={link || ''}
			>
				{/* Текст */}
				<div className='flex flex-col row-start-1 gap-3 md:col-span-6 col-span-8 p-layout'>
					<Title className='font-semibold'>{title}</Title>
					<Text size='small'>{description}</Text>
				</div>

				{/* Изображение */}
				{imageUrl && (
					<div
						className={cn(
							'w-full h-full col-start-7 col-end-12 col-span-4',
							customImageClasses
						)}
					>
						<div className={cn('lg:w-[350px] max-w-[350px]', imageSizes)}>
							<Image
								src={imageUrl}
								width={500}
								height={500}
								alt={title || 'image'}
								className='object-cover rounded-br-3xl h-full w-full'
							/>
						</div>
					</div>
				)}

				{/* Иконка стрелки */}
				{link && (
					<div className='col-span-1 max-md:col-span-4 row-start-1 md:col-start-12 max-md:col-start-9 flex justify-end p-1 items-center'>
						<ArrowUpRightIcon size={40} />
					</div>
				)}
			</Link>
		</Block>
	)

	// Содержимое без ссылки
	const SectionContent = () => (
		<Block
			className={cn(
				BlockVariants({ className, color, size }),
				'grid grid-cols-12 grid-rows-2 gap-4 items-start relative'
			)}
		>
			{/* Текст */}
			<div className='flex flex-col row-start-1 gap-3 md:col-span-6 col-span-8 p-layout'>
				<Title className='font-semibold'>{title}</Title>
				<Text size='small'>{description}</Text>
			</div>

			{/* Изображение */}
			{imageUrl && (
				<div
					className={cn(
						'w-full h-full col-start-7 col-end-12 col-span-4',
						customImageClasses
					)}
				>
					<div className={cn('lg:w-[350px] max-w-[350px]', imageSizes)}>
						<Image
							src={imageUrl}
							width={500}
							height={500}
							alt={title || 'image'}
							className='object-cover rounded-br-3xl h-full w-full'
						/>
					</div>
				</div>
			)}

			{/* Иконка стрелки */}
			{link && (
				<div className='col-span-1 max-md:col-span-4 row-start-1 md:col-start-12 max-md:col-start-9 flex justify-end p-1 items-center'>
					<ArrowUpRightIcon size={40} />
				</div>
			)}
		</Block>
	)

	// Условие для ссылки
	return link ? SectionContentWithLink() : SectionContent()
}

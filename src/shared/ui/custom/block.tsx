import { cn } from '@/shared/lib/css'
import { cva } from 'class-variance-authority'
import Image from 'next/image'
import React from 'react'
import Title from '../view/title'
import Link from 'next/link'
import { ArrowUpRightIcon } from 'lucide-react'

type BlockColors = 'white' | 'grey' | 'purple' | 'blue' | 'orange'
type BlockSizes = 'extraLarge' | 'large' | 'small' | 'medium' | 'slim'

const BlockVariants = cva('rounded-lg  ', {
	variants: {
		size: {
			small: 'w-[330px] h-[170px] rounded-3xl',
			slim: 'w-[300px] h-[100px]',
			medium: 'w-[400px] h-[250px]',
			large: 'w-[600px] h-[400px]',
			extraLarge: 'w-[1200px] min-h-[520px] rounded-3xl',
		},
		color: {
			white: 'bg-white ',
			grey: 'bg-gray-100 ',
			purple: 'bg-purple-600 ',
			blue: 'bg-blue-600 ',
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
}

export const Block: React.FC<IBlockProps> = ({
	className,
	color,
	size,
	children,
}) => {
	return (
		<section className={cn(BlockVariants({ className, color, size }))}>
			{children}
		</section>
	)
}

export const BlockLink: React.FC<IBlockProps> = ({
	className,
	color,
	size,
	icon,
	imageUrl,
	title,
	description,
	link,
}) => {
	const SectionContent = () => (
		<section
			className={cn(
				BlockVariants({ className, color, size }),
				'grid grid-cols-12 gap-4 items-start p-2'
			)}
		>
			{icon && (
				<div className='h-full col-span-3 p-2 justify-self-center'>{icon}</div>
			)}
			<div className='flex flex-col justify-center gap-3 col-span-6'>
				<Title className='text-2xl font-bold'>{title}</Title>
				<p className='font-medium text-xl max-sm:text-xl'>{description}</p>
			</div>
			{imageUrl && (
				<div className='col-span-3'>
					<Image src={imageUrl} alt={title || 'image'} />
				</div>
			)}
			{link && (
				<div className='col-span-3 place-self-start justify-self-end p-2'>
					<ArrowUpRightIcon size={40} />
				</div>
			)}
		</section>
	)

	return link ? (
		<Link href={link} passHref>
			{SectionContent()}
		</Link>
	) : (
		SectionContent()
	)
}

export default BlockLink

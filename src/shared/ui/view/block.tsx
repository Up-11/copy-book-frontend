import { cn } from '@/shared/lib/css'
import { cva } from 'class-variance-authority'
type BlockColors = 'white' | 'grey' | 'purple' | 'blue' | 'orange'
type BlockSizes = 'extraLarge' | 'large' | 'small' | 'medium' | 'slim'

const BlockVariants = cva('rounded-3xl  ', {
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
	button?: string
	buttonLink?: string
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

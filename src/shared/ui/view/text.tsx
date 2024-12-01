import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/css'

const textVariants = cva('font-normal', {
	variants: {
		size: {
			small: 'text-xs sm:text-sm md:text-base', // 12px -> 14px -> 16px
			medium: 'text-sm sm:text-base md:text-lg lg:text-xl', // 14px -> 16px -> 18px -> 20px
			large: 'text-base sm:text-lg md:text-xl lg:text-2xl', // 16px -> 18px -> 20px -> 24px
			extraLarge: 'text-lg sm:text-xl md:text-2xl lg:text-3xl', // 18px -> 20px -> 24px -> 30px
		},
		color: {
			black: 'text-primary',
			indigo: 'text-indigo-600',
			white: 'text-white',
		},
	},
	defaultVariants: {
		size: 'medium',
		color: 'black',
	},
})

interface TextProps {
	size?: 'small' | 'medium' | 'large' | 'extraLarge'
	color?: 'black' | 'indigo' | 'white'
	children: React.ReactNode
	className?: string
}

export function Text({
	size = 'medium',
	color,
	children,
	className,
	...props
}: TextProps) {
	return (
		<p {...props} className={cn(textVariants({ size, color, className }))}>
			{children}
		</p>
	)
}

export default Text

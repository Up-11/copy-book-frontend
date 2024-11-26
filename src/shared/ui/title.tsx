import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../lib/css'

const titleVariants = cva('font-medium', {
	variants: {
		size: {
			small: 'text-[16px]',
			medium: 'text-2xl',
			large: 'text-3xl',
			extraLarge: 'text-[46px]',
		},
		color: {
			black: 'text-var(--primary)',
			indigo: 'text-indigo-600',
		},
	},
	defaultVariants: {
		size: 'medium',
		color: 'black',
	},
})

interface TitleProps {
	size?: 'small' | 'medium' | 'large' | 'extraLarge'
	color?: 'black' | 'indigo'
	children: React.ReactNode
	className?: string
}

export function Title({
	size = 'medium',
	color,
	children,
	className,
	...props
}: TitleProps) {
	return (
		<h1 {...props} className={cn(titleVariants({ size, color, className }))}>
			{children}
		</h1>
	)
}

export default Title

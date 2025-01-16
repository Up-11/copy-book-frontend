import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'
import { X } from 'lucide-react'
import React from 'react'

export const ClearButton: React.FC<
	{ onClick: () => void } & PropsWithClassName
> = ({ onClick, className }) => {
	return (
		<X
			onClick={onClick}
			className={cn(
				'w-5 h-5 absolute bg-white hover:bg-white right-4 top-1/2 -translate-y-1/2 text-opacity-50 hover:text-opacity-100 cursor-pointer transition-opacity',
				className
			)}
		/>
	)
}

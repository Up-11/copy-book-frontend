'use client'

import { cn } from '../css'
import { PropsWithClassName } from '@/shared/types/props.types'
import React, { useState } from 'react'

export const HiddenText: React.FC<
	{ text: number | string } & PropsWithClassName
> = ({ text, className }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className='relative select-none'>
			<div
				className={cn(
					'absolute z-[10] h-6 w-full animate-pulse cursor-pointer rounded-md bg-accent',
					isOpen && 'hidden',
					className
				)}
				onClick={() => setIsOpen(true)}
			/>
			<div onClick={() => setIsOpen(false)}>
				<p
					className={cn(
						'z-[1] inline-flex cursor-pointer pl-1 text-base font-bold',
						!isOpen && 'opacity-0',
						className
					)}
				>
					{text}
				</p>
			</div>
		</div>
	)
}

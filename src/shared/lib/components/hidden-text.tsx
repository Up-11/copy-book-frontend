'use client'

import { cn } from '../css'
import Title from '@/shared/ui/view/title'
import React, { useState } from 'react'

export const HiddenText: React.FC<{ text: number | string }> = ({ text }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className='relative select-none'>
			<div
				className={cn(
					'absolute z-[10] h-7 w-full animate-pulse cursor-pointer rounded-md bg-accent',
					isOpen && 'hidden'
				)}
				onClick={() => setIsOpen(true)}
			/>
			<div onClick={() => setIsOpen(false)}>
				<Title
					className={cn(
						'z-[1] inline-flex cursor-pointer pl-1',
						!isOpen && 'opacity-0'
					)}
				>
					{text}
				</Title>
			</div>
		</div>
	)
}

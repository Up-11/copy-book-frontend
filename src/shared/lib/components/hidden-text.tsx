import { cn } from '../css'
import Title from '@/shared/ui/view/title'
import React, { useState } from 'react'

export const HiddenText: React.FC<{ text: number }> = ({ text }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className='relative select-none'>
			<div
				className={cn(
					'w-full bg-accent cursor-pointer rounded-md animate-pulse h-7 absolute z-[10]',
					isOpen && 'hidden'
				)}
				onClick={() => setIsOpen(true)}
			/>
			<div onClick={() => setIsOpen(false)}>
				<Title
					className={cn(
						'inline-flex  cursor-pointer pl-1  z-[1]',
						!isOpen && 'opacity-0'
					)}
				>
					{text}
				</Title>
			</div>
		</div>
	)
}

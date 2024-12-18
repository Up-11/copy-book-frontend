import { cn } from '@/shared/lib/css'
import React from 'react'

export const SettingsItem: React.FC<{
	title: string
	isActive?: boolean
	onClick?: () => void
	type: 'color' | 'lang'
}> = ({ title, onClick, isActive, type }) => {
	return (
		<li
			onClick={onClick}
			className={cn(
				'cursor-pointer rounded-lg px-3 py-2 font-bold transition-colors hover:bg-zinc-700',
				isActive && 'bg-zinc-900'
			)}
		>
			{title}

			{isActive && (
				<p className='text-xs text-zinc-600'>
					{' '}
					{type === 'lang' ? ' Текущий язык' : ' Текущая схема'}
				</p>
			)}
		</li>
	)
}

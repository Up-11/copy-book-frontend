'use client'

import { ClearButton } from '../forms/clear-button'
import { Input } from '../input/input'
import { UiTooltip } from './ui-tooltip'
import { cn } from '@/shared/lib/css'
import useDebounce from '@/shared/lib/hooks/use-debounce'
import { Search } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { useEventListener } from 'usehooks-ts'

export const SearchBar: React.FC = () => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false)
	const [value, setValue] = useState<string>('')
	const inputRef = useRef<HTMLInputElement>(null)
	const searchBarRef = useRef<HTMLDivElement>(null)

	const debouncedValue = useDebounce(value, 500)

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			setIsExpanded(false)
			setValue('')
		}
	}
	const handleClickOutside = (e: MouseEvent) => {
		if (
			searchBarRef.current &&
			!searchBarRef.current.contains(e.target as Node)
		) {
			setIsExpanded(false)
		}
	}

	useEventListener('keydown', handleKeyDown)

	useEventListener('mousedown', handleClickOutside)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	console.log(debouncedValue)

	const onClickExpand = () => {
		inputRef.current?.focus()
		setIsExpanded(true)
	}
	//TODO Disable on esc
	return (
		<>
			{/* 		{isExpanded && (
				<div
					onClick={() => setIsExpanded(false)}
					className=' fixed inset-0 z-10'
				></div>
			)} */}
			<div className='flex z-20 relative'>
				<div
					ref={searchBarRef}
					className={cn(
						'flex items-center gap-1 bg-slate-100 p-2 rounded-lg z-10 absolute right-0 transition-all duration-300 ease-in-out transform',
						isExpanded
							? 'opacity-100  w-[200px]'
							: 'opacity-0  w-[50px] pointer-events-none'
					)}
				>
					<div>
						<Search size={18} className='text-gray-500 ' />
					</div>

					<Input
						ref={inputRef}
						className='rounded-sm w-40 p-1 h-5 border-none shadow-none outline-none focus:border-none focus:outline-none active:border-none active:outline-none focus-visible:ring-0'
						placeholder='Поиск'
						value={value}
						onChange={e => handleChange(e)}
					/>
					{value && (
						<ClearButton
							className='bg-transparent hover:bg-transparent hover:scale-105 hover:text-zinc-950'
							onClick={() => setValue('')}
						/>
					)}
				</div>
				<UiTooltip delay={0} content='Поиск по заданиям'>
					<button
						onClick={onClickExpand}
						className={cn(
							'hover:bg-destructive rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out',
							isExpanded ? 'opacity-0' : 'opacity-100'
						)}
					>
						<Search size={20} className='hover:text-zinc-950 ' />
					</button>
				</UiTooltip>
			</div>
		</>
	)
}

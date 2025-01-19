'use client'

import { UiTooltip } from '../../../shared/ui/custom/ui-tooltip'
import { ClearButton } from '../../../shared/ui/forms/clear-button'
import { Input } from '../../../shared/ui/input/input'
import { useSearchBarVisual } from '../model/use-search-bar-visual'
import { useQuery, useQueryStore } from '@/common/query'
import { Search } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'
import { useDebounceCallback } from 'usehooks-ts'

export const SearchBar: React.FC<{ tooltipText?: string }> = ({
	tooltipText = 'Поиск'
}) => {
	const { getQueryValue } = useQuery()
	const [value, setValue] = useState<string>('')
	const {
		inputRef,
		isExpanded,
		onClickExpand,
		searchBarRef,
		isAnimationComplete,
		setIsAnimationComplete
	} = useSearchBarVisual()
	const setQuery = useQueryStore(state => state.updateQuery)

	useEffect(() => {
		setQuery({ search: getQueryValue('search', '') })
		setValue(getQueryValue('search', '') as string)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const updateQueryDebounced = useDebounceCallback(
		(query: string) => {
			setQuery({ search: query })
		},
		500,
		{ trailing: true }
	)

	const handleInputChange = (newValue: string) => {
		setValue(newValue)
		updateQueryDebounced(newValue)
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleInputChange(event.target.value)
	}

	const clearInput = () => {
		handleInputChange('')
	}

	return (
		<div className='flex z-20 relative'>
			<AnimatePresence>
				{isExpanded && (
					<motion.div
						ref={searchBarRef}
						initial={{ width: 50 }}
						animate={{ width: 250 }}
						exit={{ width: 0 }}
						transition={{ duration: 0.2, ease: 'easeInOut' }}
						className='flex items-center gap-1 bg-slate-100 p-2 rounded-lg z-10 absolute right-0 overflow-hidden'
					>
						<AnimatePresence>
							{isExpanded && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0, display: 'none' }}
									transition={{ duration: 0.2 }}
									onAnimationComplete={() => setIsAnimationComplete(true)}
									className='flex items-center gap-1 w-full'
								>
									<div>
										<Search size={18} className='text-gray-500' />
									</div>

									<Input
										ref={inputRef}
										className='rounded-sm w-44 p-1 h-5 border-none shadow-none outline-none focus-visible:ring-0'
										placeholder='Поиск'
										value={value}
										onChange={e => handleChange(e)}
									/>

									<motion.div
										initial={{ opacity: 0 }}
										animate={isAnimationComplete ? { opacity: 1 } : ''}
										exit={{ opacity: 0, display: 'none' }}
										transition={{ duration: 0.2 }}
									>
										{value && (
											<ClearButton
												className='bg-transparent hover:bg-transparent hover:scale-105 hover:text-zinc-950'
												onClick={clearInput}
											/>
										)}
									</motion.div>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				)}
			</AnimatePresence>

			<UiTooltip delay={200} content={tooltipText}>
				<motion.button
					onClick={onClickExpand}
					initial={{ opacity: 1 }}
					animate={isExpanded ? { opacity: 0 } : { opacity: 1 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					className='hover:bg-destructive rounded-full p-2 cursor-pointer'
				>
					<Search size={20} className='hover:text-zinc-950' />
				</motion.button>
			</UiTooltip>
		</div>
	)
}

'use client'

import { UiTooltip } from '../../../shared/ui/custom/ui-tooltip'
import { ClearButton } from '../../../shared/ui/forms/clear-button'
import { Input } from '../../../shared/ui/input/input'
import { useSearchBarVisual } from '../model/use-search-bar-visual'
import useDebounce from '@/shared/lib/hooks/use-debounce'
import { Search } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

export const SearchBar: React.FC<{ tooltipText?: string }> = ({
	tooltipText = 'Поиск'
}) => {
	const [value, setValue] = useState<string>('')
	const {
		inputRef,
		isExpanded,
		onClickExpand,
		searchBarRef,
		isAnimationComplete,
		setIsAnimationComplete
	} = useSearchBarVisual()

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const debouncedValue = useDebounce(value, 500)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
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
												onClick={() => setValue('')}
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

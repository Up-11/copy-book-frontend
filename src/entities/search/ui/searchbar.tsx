'use client'

import { UiTooltip } from '../../../shared/ui/custom/ui-tooltip'
import { ClearButton } from '../../../shared/ui/forms/clear-button'
import { Input } from '../../../shared/ui/input/input'
import { useSearchBarHandler } from '../model/use-search-bar-handler'
import { useSearchBarVisual } from '../model/use-search-bar-visual'
import { Search } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export const SearchBar: React.FC<{
	tooltipText?: string
	initialExpanded?: boolean
	externalValue?: string
	onChange?: (value: string) => void
}> = ({
	tooltipText = 'Поиск',
	initialExpanded = false,
	externalValue,
	onChange
}) => {
	const { control } = useSearchBarVisual(initialExpanded)

	const { clearInput, value, handleChange } = useSearchBarHandler({
		value: externalValue,
		onChange
	})
	return (
		<div className='relative z-20 flex'>
			<AnimatePresence>
				{control.isExpanded && (
					<motion.div
						ref={control.searchBarRef}
						initial={{ width: 0, opacity: 0 }}
						animate={{ width: 250, opacity: 1 }}
						exit={{ width: 0, opacity: 0 }}
						transition={{ duration: 0.2, ease: 'easeInOut' }}
						className='absolute right-0 z-10 flex items-center gap-1 overflow-hidden rounded-lg bg-slate-100 p-2'
					>
						<AnimatePresence>
							{control.isExpanded && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0, display: 'none' }}
									transition={{ duration: 0.2 }}
									onAnimationComplete={() =>
										control.setIsAnimationComplete(true)
									}
									className='flex w-full items-center gap-1'
								>
									<div>
										<Search size={18} className='text-gray-500' />
									</div>

									<Input
										ref={control.inputRef}
										className='h-5 w-44 rounded-sm border-none p-1 shadow-none outline-none focus-visible:ring-0'
										placeholder='Поиск'
										value={value}
										onChange={e => handleChange(e)}
									/>

									<motion.div
										initial={{ opacity: 0 }}
										animate={control.isAnimationComplete ? { opacity: 1 } : ''}
										exit={{ opacity: 0, display: 'none' }}
										transition={{ duration: 0.2 }}
									>
										{value && (
											<ClearButton
												className='bg-transparent hover:scale-105 hover:bg-transparent hover:text-zinc-950'
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
					onClick={control.onClickExpand}
					initial={{ opacity: 1 }}
					animate={control.isExpanded ? { opacity: 0 } : { opacity: 1 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					className='cursor-pointer rounded-full p-2 hover:bg-destructive'
				>
					<Search size={20} className='hover:text-zinc-950' />
				</motion.button>
			</UiTooltip>
		</div>
	)
}

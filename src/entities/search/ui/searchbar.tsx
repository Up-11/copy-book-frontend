'use client'

import { UiTooltip } from '../../../shared/ui/custom/ui-tooltip'
import { ClearButton } from '../../../shared/ui/forms/clear-button'
import { Input } from '../../../shared/ui/input/input'
import { useSearchBarHandler } from '../model/use-search-bar-handler'
import { useSearchBarVisual } from '../model/use-search-bar-visual'
import { Search } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export const SearchBar: React.FC<{ tooltipText?: string }> = ({
	tooltipText = 'Поиск'
}) => {
	const { control } = useSearchBarVisual()

	const { clearInput, value, handleChange } = useSearchBarHandler()
	return (
		<div className='flex z-20 relative'>
			<AnimatePresence>
				{control.isExpanded && (
					<motion.div
						ref={control.searchBarRef}
						initial={{ width: 0, opacity: 0 }}
						animate={{ width: 250, opacity: 1 }}
						exit={{ width: 0, opacity: 0 }}
						transition={{ duration: 0.2, ease: 'easeInOut' }}
						className='flex items-center gap-1 bg-slate-100 p-2 rounded-lg z-10 absolute right-0 overflow-hidden'
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
									className='flex items-center gap-1 w-full'
								>
									<div>
										<Search size={18} className='text-gray-500' />
									</div>

									<Input
										ref={control.inputRef}
										className='rounded-sm w-44 p-1 h-5 border-none shadow-none outline-none focus-visible:ring-0'
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
					onClick={control.onClickExpand}
					initial={{ opacity: 1 }}
					animate={control.isExpanded ? { opacity: 0 } : { opacity: 1 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					className='hover:bg-destructive rounded-full p-2 cursor-pointer '
				>
					<Search size={20} className='hover:text-zinc-950' />
				</motion.button>
			</UiTooltip>
		</div>
	)
}

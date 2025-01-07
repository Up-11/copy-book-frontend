import { Button } from '../other/button'
import { UiTooltip } from './ui-tooltip'
import { Check, X } from 'lucide-react'
import React from 'react'

export const RenamedTitle: React.FC<{
	title?: string
	isRenaming: boolean
	onClickUndo?: () => void
}> = ({ title = 'Без названия', isRenaming = false, onClickUndo }) => {
	return (
		<>
			{!isRenaming ? (
				<UiTooltip
					content='Нажмите дважды, чтобы переименовать'
					className='bg-zinc-900 text-white'
				>
					<p className='m-0 p-0 rounded-none bg-transparent border-b-2 border-transparent  outline-none text-center'>
						{title}
					</p>
				</UiTooltip>
			) : (
				<div className='flex items-center gap-2 relative'>
					<input
						className='m-0 p-0 rounded-none bg-transparent border-b-2  outline-none focus:border-b-zinc-200 border-b-zinc-500  text-center'
						defaultValue={title}
					/>
					<div className='flex items-center absolute gap-2 -right-16'>
						<Button
							onClick={onClickUndo}
							className='h-6 w-6 hover:bg-zinc-900 hover:text-white'
							variant={'outline'}
							size={'icon'}
						>
							<X />
						</Button>
						<Button
							onClick={onClickUndo}
							className='h-6 w-6 hover:bg-zinc-900 hover:text-white'
							variant={'outline'}
							size={'icon'}
						>
							<Check />
						</Button>
					</div>
				</div>
			)}
		</>
	)
}

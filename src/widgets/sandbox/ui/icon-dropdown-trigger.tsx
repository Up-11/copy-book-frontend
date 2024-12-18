import React from 'react'
import { LogoNoText } from '@/shared/ui/view/logo-no-text'
import { ChevronDown } from 'lucide-react'

export const IconDropdownTrigger: React.FC = () => {
	return (
		<div className='group flex cursor-pointer items-center justify-start gap-1 rounded-md p-1 transition-colors hover:bg-zinc-700'>
			<LogoNoText className='w-8 select-none' hasLink={false} />
			<ChevronDown
				size={16}
				className='transform transition-transform group-hover:translate-y-0.5'
			/>
		</div>
	)
}

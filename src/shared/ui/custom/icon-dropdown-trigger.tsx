import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'
import { LogoNoText } from '@/shared/ui/view/logo-no-text'
import { ChevronDown } from 'lucide-react'
import React from 'react'

export const IconDropdownTrigger: React.FC<PropsWithClassName> = ({
	className
}) => {
	return (
		<div
			className={cn(
				'group flex cursor-pointer items-center justify-start gap-1 rounded-md p-1 transition-colors hover:bg-zinc-700',
				className
			)}
		>
			<LogoNoText className='w-8 select-none' hasLink={false} />
			<ChevronDown
				size={16}
				className='transform transition-transform group-hover:translate-y-0.5'
			/>
		</div>
	)
}

import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'
import { Check } from 'lucide-react'

interface SwitchItemProps extends PropsWithClassName {
	icon?: React.ReactNode
	isActive?: boolean
	onClick: () => void
	children: React.ReactNode
	wrapperClassName?: string
}

export const SwitchItem: React.FC<SwitchItemProps> = ({
	children,
	icon,
	className,
	isActive,
	onClick,
	wrapperClassName
}) => {
	return (
		<button
			onClick={onClick}
			className={cn(
				'flex items-center font-medium hover:bg-destructive p-2 rounded-sm cursor-pointer gap-2 select-none justify-between',
				wrapperClassName,
				isActive && 'text-indigo-700'
			)}
		>
			<div className='flex justify-start gap-2 items-center'>
				{icon}
				<p
					className={cn(
						'	leading-5 cursor-pointer pl-1.5  items-center break-words !line-clamp-1  inline-flex text-xs',
						className
					)}
				>
					{children}
				</p>
			</div>
			{isActive && <Check size={16} className='' />}
		</button>
	)
}

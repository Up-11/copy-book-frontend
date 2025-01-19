import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'
import Text from '@/shared/ui/view/text'
import { Check } from 'lucide-react'

interface SwitchItemProps extends PropsWithClassName {
	icon: React.ReactNode
	isActive?: boolean
	onClick: () => void
	children: React.ReactNode
}

export const SwitchItem: React.FC<SwitchItemProps> = ({
	children,
	icon,
	className,
	isActive,
	onClick
}) => {
	return (
		<div
			onClick={onClick}
			className={cn(
				'flex items-center font-medium hover:bg-destructive p-2 rounded-sm cursor-pointer gap-2 select-none justify-between',
				className,
				isActive && 'text-indigo-700'
			)}
		>
			<div className='flex justify-start gap-2 items-center'>
				{icon}
				<Text size='extraSmall'>{children}</Text>
			</div>
			{isActive && <Check size={16} className='self-end' />}
		</div>
	)
}

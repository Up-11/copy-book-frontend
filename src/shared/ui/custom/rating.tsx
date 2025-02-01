import Text from '../view/text'
import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'
import { Star } from 'lucide-react'
import React from 'react'

export const Rating: React.FC<{ rating?: number } & PropsWithClassName> = ({
	rating,
	className
}) => {
	return (
		<>
			{rating && (
				<div
					className={cn(
						'flex cursor-default select-none items-center gap-1 self-start text-indigo-500',
						className
					)}
				>
					<Star size={16} fill='#6366f1' />
					<Text size='small' className='font-semibold'>
						{rating}
					</Text>
				</div>
			)}
		</>
	)
}

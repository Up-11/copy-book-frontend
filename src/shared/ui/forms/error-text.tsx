import { cn } from '@/shared/lib/css'
import React from 'react'
import Text from '../view/text'

export const ErrorText: React.FC<{ text: string; className: string }> = ({
	className,
	text,
}) => {
	return (
		<Text size='extraSmall' className={cn(className, 'text-red-500  ')}>
			{text}
		</Text>
	)
}

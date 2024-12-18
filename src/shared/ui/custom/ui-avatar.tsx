import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../view/avatar'

interface IAvatarProps {
	className?: string
}

export const UiAvatar: React.FC<IAvatarProps> = ({ className }) => {
	return (
		<Avatar className={className}>
			<AvatarImage src='https://github.com/shadcn.png' />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	)
}

import { Avatar, AvatarFallback, AvatarImage } from '../view/avatar'
import { PropsWithClassName } from '@/shared/types/props.types'
import React from 'react'

export const UiAvatar: React.FC<PropsWithClassName> = ({ className }) => {
	return (
		<Avatar className={className}>
			<AvatarImage src='https://github.com/shadcn.png' />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	)
}

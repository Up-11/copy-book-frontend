'use client'

import { Avatar, AvatarFallback, AvatarImage } from '../view/avatar'
import { PropsWithClassName } from '@/shared/types/props.types'
import React from 'react'

export const UiAvatar: React.FC<
	PropsWithClassName & { fallbackText: string }
> = ({ className, fallbackText }) => {
	return (
		<Avatar className={className}>
			<AvatarImage src='https://gitub.com/shadcn.png' />
			<AvatarFallback>{fallbackText || 'CN'}</AvatarFallback>
		</Avatar>
	)
}

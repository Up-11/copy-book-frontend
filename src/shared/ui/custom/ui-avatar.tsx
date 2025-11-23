'use client'

import { Avatar, AvatarFallback, AvatarImage } from '../view/avatar'
import { PropsWithClassName } from '@/shared/types/props.types'
import React from 'react'

export const UiAvatar: React.FC<
	PropsWithClassName & {
		fallbackText: string
		avatarUrl?: string | null | undefined
	}
> = ({ className, fallbackText, avatarUrl }) => {
	return (
		<Avatar className={className}>
			<AvatarImage src={avatarUrl || ''} />
			<AvatarFallback>{fallbackText || 'CN'}</AvatarFallback>
		</Avatar>
	)
}

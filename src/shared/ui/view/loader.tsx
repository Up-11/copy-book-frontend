import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'
import { LoaderIcon } from 'lucide-react'
import React from 'react'

export const Loader = <T extends PropsWithClassName & { size?: number }>({
	className,
	size
}: T) => {
	return (
		<div>
			<LoaderIcon size={size} className={cn(className, 'animate-spin')} />
		</div>
	)
}

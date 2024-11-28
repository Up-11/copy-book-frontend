import React from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '@/shared/lib/css'

interface Props {
	className?: string
}

export const Loader: React.FC<Props> = ({ className }) => {
	return (
		<div>
			<Loader2 className={cn(className, 'animate-spin')} />
		</div>
	)
}

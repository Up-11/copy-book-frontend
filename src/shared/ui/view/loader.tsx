import React from 'react'
import { cn } from '../lib/css'
import { Loader2 } from 'lucide-react'

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

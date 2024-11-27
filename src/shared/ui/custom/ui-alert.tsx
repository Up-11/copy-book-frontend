import { Terminal } from 'lucide-react'
import React from 'react'
import { Alert, AlertTitle, AlertDescription } from '../view/alert'

interface Props {
	className?: string
	title: string
	description: string
}

export const UiAlert: React.FC<Props> = ({ className, title, description }) => {
	return (
		<Alert className={className}>
			<Terminal className='h-4 w-4' />
			<AlertTitle>{title}</AlertTitle>
			<AlertDescription>{description}</AlertDescription>
		</Alert>
	)
}

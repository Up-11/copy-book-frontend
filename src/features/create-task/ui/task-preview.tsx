import { Alert, AlertDescription, AlertTitle } from '@/shared/ui/view/alert'
import Title from '@/shared/ui/view/title'
import { FileWarningIcon } from 'lucide-react'
import React from 'react'

export const TaskPreview: React.FC = () => {
	return (
		<div className='sticky top-40 h-[700px] w-full p-layout'>
			<Title>Предпросмотр</Title>
			<Alert>
				<FileWarningIcon className='h-4 w-4' />
				<AlertTitle>Осторожно!</AlertTitle>
				<AlertDescription>
					При таких настройках вы не сможете отслеживать статистику задания!
				</AlertDescription>
			</Alert>
		</div>
	)
}

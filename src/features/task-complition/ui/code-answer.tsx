'use client'

import { useCodeTask } from '../model/use-code-task'
import { CodeEditorWindow, OutputWindow } from '@/entities/code-editor'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui/modals/dialog'
import { Button } from '@/shared/ui/other/button'
import Title from '@/shared/ui/view/title'
import React from 'react'

export const CodeAnswer: React.FC = () => {
	const { code, lang, onChange, isPending, outputDetails, handleCompileCode } =
		useCodeTask()
	return (
		<div className='flex items-center justify-between gap-2'>
			<Title>Откройте редактор кода для выполнения задания</Title>
			<Dialog>
				<DialogTrigger asChild>
					<Button variant={'primary'} className='self-start'>
						Открыть
					</Button>
				</DialogTrigger>
				<DialogContent className='h-[90dvh] max-h-[90dvh] max-w-[90%] !rounded-sm'>
					<DialogHeader>
						<DialogTitle>Редактор кода</DialogTitle>
					</DialogHeader>
					<div className='grid h-full w-full grid-cols-[60%_auto]'>
						<CodeEditorWindow
							className='h-[80dvh] rounded-md'
							code={code}
							onChange={onChange}
							language={lang.value}
						/>
						<div className='flex flex-col justify-between px-2'>
							<OutputWindow
								isPending={isPending}
								outputDetails={outputDetails}
							/>
							<Button onClick={handleCompileCode}>Запустить</Button>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	)
}

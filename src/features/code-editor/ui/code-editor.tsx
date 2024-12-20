'use client'
import React from 'react'
import { Button } from '@/shared/ui/other/button'
import { Play } from 'lucide-react'
import { CodeEditorWindow } from '@/entities/code-editor'
import { useCode } from '../model/use-code-editor'
import { useCompileCode } from '../model/use-compile-code'

export const CodeEditor: React.FC = () => {
	const { code, onChange, language } = useCode()
	const { handleCompileCode } = useCompileCode()
	return (
		<div className='h-full'>
			<div className='flex h-8 items-center justify-end border-b border-b-zinc-700 px-2 text-sm'>
				<Button
					onClick={handleCompileCode}
					size={'sm'}
					variant={'outline'}
					className='h-6 text-xs hover:bg-primary/40 hover:text-white'
				>
					<Play />
					Запустить
				</Button>
			</div>
			<CodeEditorWindow
				code={code}
				onChange={onChange}
				language={language.value}
			/>
		</div>
	)
}

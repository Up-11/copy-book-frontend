'use client'
import React from 'react'
import Editor from '@monaco-editor/react'
import { cn } from '@/shared/lib/css'
import { Loader } from '@/shared/ui/view/loader'
import { useEditorChange } from '../model/use-editor-change'

interface Props {
	language: string
	code: string | undefined
	theme?: string
	onChange: (action: string, data: string | undefined) => void
	className?: string
}

export const CodeEditorWindow: React.FC<Props> = ({
	className,
	language,
	code,
	onChange,
	theme
}) => {
	const { value, handleEditorChange } = useEditorChange(code, onChange)
	return (
		<div className={cn('overlay h-full w-full overflow-hidden', className)}>
			<Editor
				height='100%'
				width={`100%`}
				language={language || 'javascript'}
				value={value}
				theme={theme || 'vs-dark'}
				defaultValue='//some Comment'
				onChange={handleEditorChange}
				loading={<Loader />}
				options={{ fontSize: 16 }}
			/>
		</div>
	)
}

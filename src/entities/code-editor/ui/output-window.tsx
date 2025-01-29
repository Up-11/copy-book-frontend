'use client'

import { OutputDetailsNullable } from '../../../features/code-editor/types'
import { OutputDetails } from './output-details'
import { cn } from '@/shared/lib/css'
import { Loader } from '@/shared/ui/view/loader'
import React from 'react'

enum CompileStatus {
	SUCCESS = 3,
	TIME_LIMIT = 5,
	COMPILATION_ERROR = 6
}

export const OutputWindow: React.FC<{
	outputDetails: OutputDetailsNullable
	isPending: boolean
}> = ({ outputDetails, isPending }) => {
	const decodeOutput = (output: string | null): string => {
		if (!output) return ''
		try {
			return atob(output)
		} catch {
			return output
		}
	}

	const getOutput = () => {
		if (!outputDetails?.status?.id) return null

		const statusId = outputDetails.status.id

		switch (statusId) {
			case CompileStatus.COMPILATION_ERROR:
				return (
					<pre className='px-2 py-1 text-xs font-normal text-red-500'>
						{decodeOutput(outputDetails.compile_output)}
					</pre>
				)
			case CompileStatus.SUCCESS:
				return (
					<pre className='px-2 py-1 text-xs font-normal text-green-500'>
						{decodeOutput(outputDetails.stdout)}
					</pre>
				)
			case CompileStatus.TIME_LIMIT:
				return (
					<pre className='px-2 py-1 text-xs font-normal text-red-500'>
						Time Limit Exceeded
					</pre>
				)
			default:
				return (
					<pre className='px-2 py-1 text-xs font-normal text-red-500'>
						{decodeOutput(outputDetails.stderr)}
					</pre>
				)
		}
	}

	return (
		<>
			<div className='flex items-center justify-center'>
				<div
					className={cn(
						'h-96 w-full overflow-y-auto rounded-md bg-zinc-900 text-sm font-normal text-white'
					)}
				>
					{isPending ? (
						<div className='flex h-full flex-col justify-center'>
							<Loader size={30} className='m-auto h-full' />
						</div>
					) : (
						getOutput()
					)}
				</div>
			</div>
			<OutputDetails outputDetails={outputDetails} />
		</>
	)
}

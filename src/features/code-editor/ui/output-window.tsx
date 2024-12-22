'use client'

import { useCompileCodeStore } from '../store/compile-code-store'
import { OutputDetails } from './output-details'
import { Loader } from '@/shared/ui/view/loader'
import React from 'react'

enum CompileStatus {
	SUCCESS = 3,
	TIME_LIMIT = 5,
	COMPILATION_ERROR = 6
}

export const OutputWindow = () => {
	const outputDetails = useCompileCodeStore(state => state.outputDetails)
	const isPending = useCompileCodeStore(state => state.isProcessing)

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
					<pre className='px-2 py-1 font-normal text-xs text-red-500'>
						{decodeOutput(outputDetails.compile_output)}
					</pre>
				)
			case CompileStatus.SUCCESS:
				return (
					<pre className='px-2 py-1 font-normal text-xs text-green-500'>
						{decodeOutput(outputDetails.stdout)}
					</pre>
				)
			case CompileStatus.TIME_LIMIT:
				return (
					<pre className='px-2 py-1 font-normal text-xs text-red-500'>
						Time Limit Exceeded
					</pre>
				)
			default:
				return (
					<pre className='px-2 py-1 font-normal text-xs text-red-500'>
						{decodeOutput(outputDetails.stderr)}
					</pre>
				)
		}
	}

	return (
		<div className='p-layout'>
			<h1 className='font-bold text-xl mb-2'>Результат</h1>
			<div className='flex justify-center items-center h-full'>
				<div className='w-full h-96 bg-zinc-900 rounded-md text-white font-normal text-sm overflow-y-auto'>
					{isPending ? <Loader /> : getOutput()}
				</div>
			</div>
			<OutputDetails outputDetails={outputDetails} />
		</div>
	)
}

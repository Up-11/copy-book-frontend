import { OutputDetailsNullable } from '../../../features/code-editor/types'
import React from 'react'

export const OutputDetails: React.FC<{
	outputDetails: OutputDetailsNullable
}> = ({ outputDetails }) => {
	return (
		<div className='metrics-container mt-4 flex flex-col space-y-3'>
			{outputDetails && (
				<>
					{' '}
					<p className='text-sm'>
						Статус:
						<span className='rounded-md px-2 py-1 font-semibold'>
							{outputDetails?.status?.description}
						</span>
					</p>
					<p className='text-sm'>
						Память:
						<span className='rounded-md px-2 py-1 font-semibold'>
							{outputDetails?.memory}
						</span>
					</p>
					<p className='text-sm'>
						Время выполнения:
						<span className='rounded-md px-2 py-1 font-semibold'>
							{outputDetails?.time}
						</span>
					</p>
				</>
			)}
		</div>
	)
}

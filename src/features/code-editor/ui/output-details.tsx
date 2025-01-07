import { OutputDetailsNullable } from '../types'
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
						<span className='font-semibold px-2 py-1 rounded-md '>
							{outputDetails?.status?.description}
						</span>
					</p>
					<p className='text-sm'>
						Память:
						<span className='font-semibold px-2 py-1 rounded-md'>
							{outputDetails?.memory}
						</span>
					</p>
					<p className='text-sm'>
						Время выполнения:
						<span className='font-semibold px-2 py-1 rounded-md'>
							{outputDetails?.time}
						</span>
					</p>
				</>
			)}
		</div>
	)
}

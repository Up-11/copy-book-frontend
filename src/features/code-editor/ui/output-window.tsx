import React from 'react'

export const OutputWindow: React.FC<{ outputDetails: never }> = ({
	outputDetails
}) => {
	return <div className='h-[300px] w-full'>{outputDetails}</div>
}

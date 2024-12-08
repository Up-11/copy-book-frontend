import { X } from 'lucide-react'
import React from 'react'

interface Props {
	onClick: () => void
}

export const ClearButton: React.FC<Props> = ({ onClick }) => {
	return (
		<X
			onClick={onClick}
			className='w-5 h-5 absolute bg-white hover:bg-white right-4 top-1/2 -translate-y-1/2 text-opacity-50 hover:text-opacity-100 cursor-pointer transition-opacity'
		/>
	)
}

import { X } from 'lucide-react'
import React from 'react'

interface Props {
	onClick: () => void
}

export const ClearButton: React.FC<Props> = ({ onClick }) => {
	return (
		<X
			onClick={onClick}
			className='w-5 h-5 absolute bg-none hover:bg-none  right-4 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 cursor-pointer transition-opacity'
		/>
	)
}

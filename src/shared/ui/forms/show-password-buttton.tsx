import { Eye, EyeClosed } from 'lucide-react'
import React from 'react'

export const ShowPasswordButton: React.FC<{
	onClick: () => void
	isShown: boolean
}> = ({ onClick, isShown }) => {
	return isShown ? (
		<Eye
			onClick={onClick}
			className='w-5 h-5 absolute bg-none hover:bg-none  right-11 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 cursor-pointer transition-opacity'
		/>
	) : (
		<EyeClosed
			onClick={onClick}
			className='w-5 h-5 absolute bg-none hover:bg-none  right-11 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 cursor-pointer transition-opacity'
		/>
	)
}

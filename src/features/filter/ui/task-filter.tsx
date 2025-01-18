import { ListFilterIcon } from 'lucide-react'
import React from 'react'

export const TaskFilter: React.FC = () => {
	return (
		<div className='flex'>
			Фильтры
			<ListFilterIcon />
		</div>
	)
}

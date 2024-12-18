import React from 'react'
import Text from '@/shared/ui/view/text'


export const DraftTitle: React.FC = () => {
	return (
		<div className='absolute left-1/2 -translate-x-1/2'>
			<Text size='small'>Без названия</Text>
		</div>
	)
}

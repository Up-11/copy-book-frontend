import { ImperialLink } from './imperial-link'
import React from 'react'

export const DashboardFooter: React.FC = () => {
	return (
		<div className='h-32 flex items-center justify-between'>
			<div>COPYBOOK 2025</div>
			<div>Все права защищены</div>
			<ImperialLink className='text-primary hover:text-primary/80' />
		</div>
	)
}

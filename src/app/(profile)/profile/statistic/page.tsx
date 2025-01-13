import Title from '@/shared/ui/view/title'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Статистика'
}
export default function StatisticPage() {
	return (
		<div>
			<Title size='large'>Статистика</Title>
		</div>
	)
}

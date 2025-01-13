import Title from '@/shared/ui/view/title'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Настройки'
}
export default function PersonalInfoPage() {
	return (
		<div>
			<Title size='large'>Настройки</Title>
		</div>
	)
}

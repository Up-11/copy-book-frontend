import Title from '@/shared/ui/view/title'
import { PersonalDataBlock } from '@/widgets/profile'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Личные данные'
}
export default function PersonalInfoPage() {
	return (
		<section className='flex flex-col gap-1'>
			<Title size='large'>Личные данные</Title>
			<div>
				<PersonalDataBlock />
			</div>
		</section>
	)
}

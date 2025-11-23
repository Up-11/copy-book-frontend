import Title from '@/shared/ui/view/title'
import { ProfilePersonal } from '@/widgets/profile/ui/profile-personal'
import { Separator } from '@radix-ui/react-separator'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Личные данные'
}

export default function PersonalInfoPage() {
	return (
		<section className='flex flex-col gap-1'>
			<ProfilePersonal />
		</section>
	)
}

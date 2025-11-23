import ProfileInfo from '@/widgets/profile/ui/profile-info'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Информация об аккаунте'
}
export default function AccountInfoPage() {
	return (
		<section className='flex flex-col gap-1'>
			<ProfileInfo />
		</section>
	)
}

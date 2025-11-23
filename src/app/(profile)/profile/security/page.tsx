import { ProfileSecurity } from '@/widgets/profile/ui/profile-security'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Безопасность'
}

export default function PersonalInfoPage() {
	return (
		<section className='flex flex-col gap-1'>
			<ProfileSecurity />
		</section>
	)
}

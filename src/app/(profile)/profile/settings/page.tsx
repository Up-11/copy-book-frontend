import { ProfileSettings } from '@/widgets/profile/ui/profile-settings'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Настройки'
}
export default function SettingsPage() {
	return (
		<section className='flex flex-col gap-1'>
			<ProfileSettings />
		</section>
	)
}

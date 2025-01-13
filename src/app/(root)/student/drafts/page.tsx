import { DraftSection } from '@/widgets/draft'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Черновики'
}

export default function DraftsPage() {
	return <DraftSection />
}

import { TeacherDashboard } from '@/widgets/dashboards'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Учитель'
}

export default function Page() {
	return <TeacherDashboard />
}

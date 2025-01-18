import { AllTasks } from '@/widgets/task'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Все задания'
}
export default function AllTasksPage() {
	return <AllTasks />
}

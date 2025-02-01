import { CreatedTasks } from '@/widgets/task'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Созданные задания'
}

export default function Page() {
	return <CreatedTasks />
}

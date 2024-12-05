import { ChevronRight } from 'lucide-react'
import Text from './text'

export const ListElement: React.FC<{ item: string }> = ({ item }) => (
	<li className='flex gap-2  '>
		<div>
			<ChevronRight size={20} />
		</div>{' '}
		<Text size='small'>{item}</Text>
	</li>
)

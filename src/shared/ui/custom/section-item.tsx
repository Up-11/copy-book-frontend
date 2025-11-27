import { cn } from '@/shared/lib/css'

export const SectionItem: React.FC<{
	isActive?: boolean
	name?: string
	onClick?: () => void
	canOpen?: boolean
}> = ({ isActive = false, name, onClick, canOpen }) => {
	return (
		<button
			onClick={onClick}
			disabled={!canOpen}
			className={cn(
				'inline-flex items-center justify-center gap-2 rounded-md border px-3 py-1.5 font-normal',
				isActive
					? 'border-indigo-200 bg-indigo-500 text-white'
					: 'border-gray-200 bg-gray-50'
			)}
		>
			{name && <h3 className='text-md'>{name}</h3>}
		</button>
	)
}

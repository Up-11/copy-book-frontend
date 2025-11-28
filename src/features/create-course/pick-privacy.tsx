import { useCourseCreation } from './model/use-course-creation'
import { CoursePrivacy } from '@/shared/api/graphql/generated/output'
import { cn } from '@/shared/lib/css'
import Text from '@/shared/ui/view/text'
import { Globe, Lock, ScanBarcode } from 'lucide-react'

export const PickPrivacy: React.FC = () => {
	const { getters, setters } = useCourseCreation()
	const privacyVariants = [
		{
			icon: <Globe className='h-5 w-5' />,
			label: 'Публичный',
			description: 'Курс виден всем пользователям платформы',
			value: CoursePrivacy.Public
		},
		{
			icon: <ScanBarcode className='h-5 w-5' />,
			label: 'По коду',
			description: 'Доступ только по коду курса',
			value: CoursePrivacy.ByToken
		},
		{
			icon: <Lock className='h-5 w-5' />,
			label: 'Приватный',
			description: 'Доступ только по коду курса',
			value: CoursePrivacy.Private
		}
	]
	return (
		<div className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
			{privacyVariants.map(variant => (
				<div
					key={variant.value}
					className={cn(
						'cursor-pointer select-none rounded-xl border-2 p-4 transition-all',
						getters.privacy === variant.value
							? 'border-indigo-300 bg-indigo-50 shadow-sm'
							: 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50' // Неактивный стиль
					)}
					onClick={() => setters.privacy(variant.value)}
				>
					<div className='flex items-center gap-3'>
						<div
							className={cn(
								'flex h-6 w-6 items-center justify-center',
								getters.privacy === variant.value && 'text-indigo-500'
							)}
						>
							{variant.icon}
						</div>
						<Text
							className={cn(
								'font-semibold',
								getters.privacy === variant.value && 'text-indigo-900'
							)}
						>
							{variant.label}
						</Text>
					</div>
					<Text
						size='extraSmall'
						className={cn(
							'mt-2',
							getters.privacy === variant.value && 'text-indigo-700'
						)}
					>
						{variant.description}
					</Text>
				</div>
			))}
		</div>
	)
}

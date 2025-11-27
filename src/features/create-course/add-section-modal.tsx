import { useCourseCreation } from './model/use-course-creation'
import { useCreateSectionMutation } from '@/shared/api/graphql/generated/output'
import { Input } from '@/shared/ui/input/input'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui/modals/dialog'
import { Button } from '@/shared/ui/other/button'
import Text from '@/shared/ui/view/text'
import React, { PropsWithChildren, useState } from 'react'
import { toast } from 'sonner'

export const AddSectionModal: React.FC<
	PropsWithChildren & { refetch: () => void }
> = ({ children, refetch }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [sectionName, setSectionName] = useState('')
	const { getters } = useCourseCreation()
	const [createSection, { loading }] = useCreateSectionMutation({
		onCompleted: () => {
			toast.success('Раздел успешно создан')
			refetch()
			setSectionName('')
			setIsOpen(false)
		},
		onError: error => {
			toast.error(error.message)
		}
	})

	const handleAddSection = () => {
		if (sectionName.trim()) {
			createSection({
				variables: {
					data: { title: sectionName.trim(), courseId: getters.id }
				}
			})
		}
	}

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>{children}</DialogTrigger>

			<DialogContent className='z-[1100] sm:max-w-md'>
				<DialogHeader>
					<DialogTitle>Новый раздел</DialogTitle>
				</DialogHeader>

				<div className='space-y-4 py-2'>
					<div className='space-y-2'>
						<label htmlFor='section-name' className='text-sm font-medium'>
							Название секции
						</label>
						<Input
							id='section-name'
							placeholder='Например: "Основы JavaScript"'
							value={sectionName}
							onChange={e => setSectionName(e.target.value)}
							onKeyDown={e => {
								if (e.key === 'Enter') {
									handleAddSection()
								}
							}}
							autoFocus
						/>
					</div>

					<div className='flex gap-2 pt-2'>
						<Button
							variant='outline'
							onClick={() => setIsOpen(false)}
							className='flex-1'
						>
							Отмена
						</Button>
						<Button
							onClick={handleAddSection}
							disabled={!sectionName.trim()}
							loading={loading}
							className='flex-1'
						>
							Создать
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}

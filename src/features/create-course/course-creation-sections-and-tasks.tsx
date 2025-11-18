import { AddSectionModal } from './add-section-modal'
import { SectionInfoModal } from './section-info-modal'
import { CourseChapterItem } from '@/entities/course'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import { Modal } from '@/shared/ui/modals/modal'
import { Button } from '@/shared/ui/other/button'
import { Plus } from 'lucide-react'
import React from 'react'

export const CourseCreationSectionsAndTasks: React.FC = () => {
	const item = { id: '123', title: 'Chapter 1' }
	return (
		<div className='grid grid-cols-6 gap-4'>
			<Modal
				title={'Редактировать секцию'}
				content={<SectionInfoModal item={item} />}
			>
				<button>
					<CourseChapterItem item={item} />
				</button>
			</Modal>
			<UiTooltip content='Добавить секцию'>
				<Modal title='Добавление секции' content={<AddSectionModal />}>
					<Button size={'icon'} variant={`primary`}>
						<Plus />
					</Button>
				</Modal>
			</UiTooltip>
		</div>
	)
}

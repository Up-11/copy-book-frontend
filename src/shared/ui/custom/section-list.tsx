import { SectionItem } from './section-item'
import { Fragment } from 'react'

export interface Section {
	id: string
	name: string
	component: React.ComponentType<any>
	canOpen?: boolean
}

interface Props {
	sections: Section[]
	activeSection: Section
	onSectionChange?: (section: Section) => void
}

export const SectionList: React.FC<Props> = ({
	sections,
	activeSection,
	onSectionChange
}) => {
	const ActiveComponent = activeSection.component
	return (
		<div className='w-full'>
			<div className='mb-8 flex items-center justify-between'>
				{sections.map((section, index) => (
					<Fragment key={section.id}>
						<SectionItem
							name={section.name}
							isActive={activeSection.id === section.id}
							onClick={() => onSectionChange?.(section)}
							canOpen={section.canOpen}
						/>
						{index < sections.length - 1 && (
							<div
								key={`line-${section.id}`}
								className='mx-4 h-px flex-1 bg-gray-300'
							/>
						)}
					</Fragment>
				))}
			</div>

			<div className='w-full'>
				<ActiveComponent />
			</div>
		</div>
	)
}

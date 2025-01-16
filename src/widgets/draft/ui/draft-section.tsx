'use client'

import { useDraft } from '../model/use-draft'
import { DraftItem, LayoutSwitch } from '@/entities/draft'
import { DRAFT_MOCK } from '@/entities/draft/mock.data'
import { routes } from '@/shared/config/routes'
import { cn } from '@/shared/lib/css'
import { SearchBar } from '@/shared/ui/custom/searchbar'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import { Loader } from '@/shared/ui/view/loader'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export const DraftSection = () => {
	const { isHydrated, layout, setActiveLayout } = useDraft()
	if (!isHydrated) {
		return (
			<div className='flex items-center flex-col justify-center h-[88vh] '>
				<Loader size={44} />
				<Text size='small'>Черновики загружкаются подождите</Text>
			</div>
		)
	}

	return (
		<>
			<div className='flex justify-between  mt-8 mb-4'>
				<Title>Черновики</Title>
				<div className='flex items-center gap-3'>
					<SearchBar />
					<LayoutSwitch
						activeLayout={layout}
						setActiveLayout={setActiveLayout}
					/>
				</div>
			</div>
			<section
				className={cn(
					layout === 'grid'
						? 'grid grid-cols-5 gap-3 mt-8'
						: 'flex flex-col gap-3 mt-8'
				)}
			>
				{DRAFT_MOCK.map(draft => (
					<DraftItem key={draft.id} {...draft} isGrid={layout === 'grid'} />
				))}
			</section>
			<section>
				<UiTooltip content='Создать новый черновик'>
					<Link
						href={routes.code.sandbox}
						className='bg-indigo-200  transition-opacity p-2 rounded-full fixed bottom-10 right-10  flex font-semibold cursor-pointer items-center justify-between text-base gap-2   '
					>
						<Plus size={25} />
					</Link>
				</UiTooltip>
			</section>
		</>
	)
}

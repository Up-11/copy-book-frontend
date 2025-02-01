import { HiddenText } from '@/shared/lib/components/hidden-text'
import { WithCondition } from '@/shared/lib/components/with-condition'
import { getPrivacy } from '@/shared/lib/map'
import { Course } from '@/shared/types/course.types'
import { PropsWithClassName } from '@/shared/types/props.types'
import { Rating } from '@/shared/ui/custom/rating'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/shared/ui/modals/popover'
import { Button } from '@/shared/ui/other/button'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import { ShareIcon } from 'lucide-react'
import React, { PropsWithChildren } from 'react'

export const TeacherCoursePopover: React.FC<
	PropsWithChildren &
		PropsWithClassName & { item: Course; isDashboard?: boolean }
> = ({ item, className, children }) => {
	return (
		<Popover>
			<PopoverTrigger className={className} asChild>
				{children}
			</PopoverTrigger>
			<PopoverContent
				align='start'
				side='right'
				className='flex w-[430px] flex-col gap-2 p-layout'
			>
				<div className='flex items-center justify-between'>
					<Title size='small' className='line-clamp-2'>
						{item.title}
					</Title>
					{!item.isDraft && <Rating rating={item.statistics.averageRating} />}
				</div>
				<Text size='small' color='gray' className='line-clamp-4'>
					{item.description}
				</Text>
				<div className='grid grid-cols-2 gap-3'>
					<div className='col-span-2 flex items-center gap-1 rounded-lg bg-indigo-200 p-2'>
						<Text size='small'>Заданий: </Text>
						<Text size='small' className='font-bold'>
							{item.progress.itemsQuantity}
						</Text>
					</div>
					<WithCondition
						condition={!!item.progress.itemsQuantity}
						className='col-span-1 flex items-center gap-1 rounded-lg bg-indigo-200 p-2'
						render={
							<>
								<Text size='extraSmall'>Секций: </Text>
								<Text size='extraSmall' className='line-clamp-2 font-bold'>
									{item.progress.chaptersQuantity}
								</Text>
							</>
						}
					/>
					<WithCondition
						className='rounded-lg bg-indigo-200 p-2'
						condition={!!item.privacy}
						render={
							<div className='flex items-center gap-2'>
								<Text size='extraSmall' className='self-start'>
									Доступность:
								</Text>
								<Text
									size='extraSmall'
									className='line-clamp-2 break-words font-bold'
								>
									{getPrivacy(item.privacy!)}
								</Text>
							</div>
						}
					/>

					<WithCondition
						className='rounded-lg bg-indigo-200 p-2'
						condition={!!item.statistics.studentsNow}
						render={
							<div className='flex items-center justify-start gap-2'>
								<Text size='extraSmall' className=''>
									Студентов сейчас:
								</Text>
								<Text
									size='extraSmall'
									className='line-clamp-2 break-words font-bold'
								>
									{item.statistics.studentsNow}
								</Text>
							</div>
						}
					/>
					<WithCondition
						className='rounded-lg bg-indigo-200 p-2'
						condition={!!item.code}
						render={
							<div className='flex items-center justify-start gap-2'>
								<Text size='extraSmall' className=''>
									Код доступа:
								</Text>

								<HiddenText text={item.code!} />
							</div>
						}
					/>
					<WithCondition
						className='col-span-2 rounded-lg bg-red-200 p-2'
						condition={!!item.isDraft}
						render={
							<div className='flex items-center gap-2'>
								<Text
									size='small'
									className='line-clamp-2 break-words font-bold'
								>
									Черновик
								</Text>
							</div>
						}
					/>
					<div className='col-span-2 line-clamp-2 flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-200 p-2 text-center text-base font-bold'>
						Поделиться <ShareIcon size={18} />
					</div>
				</div>
				<div className='mt-auto flex justify-between gap-3'>
					<Button variant={'outline'}>Удалить</Button>
					<WithCondition
						condition={!item.isDraft}
						render={<Button variant={'destructive'}>Статистика</Button>}
					/>
					<Button>Редактировать</Button>
				</div>
			</PopoverContent>
		</Popover>
	)
}

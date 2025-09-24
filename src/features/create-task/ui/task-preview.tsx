'use client'

import { useTaskCreation } from '../model/use-task-creation'
import { MarkdownReader } from '@/entities/markdown'
import { WithCondition } from '@/shared/lib/components/with-condition'
import { getBadgeByTaskType } from '@/shared/lib/map'
import { Alert, AlertDescription, AlertTitle } from '@/shared/ui/view/alert'
import { TaskDiffBadge } from '@/shared/ui/view/task-diff-badge'
import Title from '@/shared/ui/view/title'
import { FileWarningIcon } from 'lucide-react'
import React from 'react'

export const TaskPreview: React.FC = () => {
	const { getters } = useTaskCreation()

	return (
		<div className='sticky top-40 h-[700px] w-full p-layout'>
			<Title>Предпросмотр</Title>
			<div className='mt-4 flex flex-col gap-3 rounded-lg bg-indigo-50 p-2'>
				<section className='flex items-center justify-between'>
					<Title size='large' className='cursor-default'>
						{getters.title}
					</Title>
					{getters.difficulty && (
						<TaskDiffBadge diff={getters.difficulty} className='text-xl' />
					)}
				</section>
				<section className='my-1'>
					<MarkdownReader text={getters.description} />
				</section>
				<section className='grid-rows-[1fr_auto} mt-2 grid grid-cols-3 gap-3'>
					{!getters.anonymus && (
						<>
							<WithCondition
								condition={!!getters.course.title}
								className='cursor-default rounded-lg bg-indigo-100 p-layout'
								render={
									<div className='group'>
										Курс:
										<Title>{getters.course.title}</Title>
									</div>
								}
							/>
							<WithCondition
								condition={!!getters.course.chapter}
								className='cursor-default rounded-lg bg-indigo-100 p-layout'
								render={
									<div className='group'>
										Секция:
										<Title>{getters.course.chapter}</Title>
									</div>
								}
							/>
						</>
					)}
					<WithCondition
						condition={!getters.anonymus}
						className='cursor-default rounded-lg bg-indigo-100 p-layout'
						render={
							<div className='group'>
								Создатель:
								<Title>Баабууин</Title>
							</div>
						}
					/>
					<WithCondition
						condition={!!getters.type}
						className='cursor-default rounded-lg bg-indigo-100 p-layout'
						render={
							<div className='group'>
								Тип задания:
								<Title size='small' className='font-bold'>
									{getters.type && getBadgeByTaskType(getters.type).text}
								</Title>
							</div>
						}
					/>
				</section>
			</div>
			{getters.anonymus && (
				<Alert className='border-red-500 bg-red-200 text-red-950'>
					<FileWarningIcon className='h-4 w-4' color='#450a0a' />
					<AlertTitle>Осторожно!</AlertTitle>
					<AlertDescription>
						При таких настройках вы не сможете отслеживать статистику задания!
					</AlertDescription>
				</Alert>
			)}
		</div>
	)
}

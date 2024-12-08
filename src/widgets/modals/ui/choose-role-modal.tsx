import { routes } from '@/shared/config/routes'
import { Modal } from '@/shared/ui/modals/modal'
import Title from '@/shared/ui/view/title'
import { ArrowUpRightIcon } from 'lucide-react'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import './modals.styles.scss'
export const ChooseRoleModal: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<Modal
			content={
				<>
					<Title className='mb-4 font-semibold'>
						Кто будет пользоваться учебником?
					</Title>
					<div className='flex justify-center max-sm:flex-col   gap-4 '>
						<Link
							href={routes.studentAuth}
							className='bg-yellow-100 rounded-3xl sm:h-[200px] sm:w-[50%] p-layout flex justify-between kid-image '
						>
							<Title>Я ученик</Title>
							<ArrowUpRightIcon size={30} />
						</Link>
						<Link
							href={routes.home}
							className='bg-gray-100 rounded-3xl sm:h-[200px] sm:w-[50%] p-layout flex justify-between '
						>
							<Title>Я учитель</Title>
							<ArrowUpRightIcon size={30} />
						</Link>
					</div>
				</>
			}
		>
			{children}
		</Modal>
	)
}

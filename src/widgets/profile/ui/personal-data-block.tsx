import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'
import { AccentColorText } from '@/shared/ui/custom/accent-color-item'
import { UiAvatar } from '@/shared/ui/custom/ui-avatar'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import { Button } from '@/shared/ui/other/button'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import { AlertCircle } from 'lucide-react'
import React from 'react'

export const PersonalDataBlock: React.FC<PropsWithClassName> = ({
	className
}) => {
	return (
		<section>
			<article
				className={cn(
					'bg-destructive rounded-lg p-layout flex justify-between gap-6 mb-4',
					className
				)}
			>
				<div className='flex gap-6'>
					<UiAvatar className='w-36 h-36' />
					<div className='flex flex-col gap-3 justify-start'>
						<Text className='' size='large'>
							Иван Иванов
						</Text>
						<AccentColorText className=''>Ученик</AccentColorText>
					</div>
				</div>
				<Button className='self-end'>Изменить данные</Button>
			</article>
			<div className='grid grid-cols-3 gap-4 '>
				<article className='bg-destructive rounded-lg p-layout flex flex-col gap-4'>
					<Title>Электронная почта</Title>
					<div>
						<AccentColorText className='font-bold'>
							IvanIvanov@yandex.ur
						</AccentColorText>
					</div>
					<Button className='self-end'>Изменить </Button>
				</article>
				<article className='bg-destructive rounded-lg p-layout flex flex-col gap-4 col-span-2'>
					<Title className='flex'>
						Двухфакторная аутентификация{' '}
						<UiTooltip
							className='bg-zinc-300'
							content='Для входа в аккаунт будет необходимо подтвержение по эл. почте'
						>
							<AlertCircle size={15} />
						</UiTooltip>{' '}
					</Title>
					<div>
						<AccentColorText className='font-extrabold'>
							Выключена
						</AccentColorText>
					</div>
					<Button className='self-end'>
						Включить двухфакторную аутентификацию
					</Button>
				</article>
			</div>
			<div className='grid grid-cols-3 gap-4 grid-rows-2 mt-4'>
				<article className='bg-destructive rounded-lg p-layout flex flex-col gap-1 '>
					<Title>Выйти из аккаунта</Title>
					<Button className='self-end'>Выход</Button>
				</article>
				<article className='bg-destructive rounded-lg p-layout col-start-1 row-start-2  flex justify-between items-center gap-1 col-span-3 '>
					<Title>Удалить аккаунт</Title>
					<Button size={'lg'} className=' bg-red-500 hover:bg-red-700'>
						Удалить
					</Button>
				</article>
				<article className='bg-destructive rounded-lg p-layout col-start-2 row-start-1  flex  gap-1 col-span-2 justify-between '>
					<div className='flex flex-col'>
						<Title>Поменять пароль</Title>
						<AccentColorText className='font-bold '>*********</AccentColorText>
					</div>
					<Button className='self-end'>Изменить</Button>
				</article>
			</div>
		</section>
	)
}

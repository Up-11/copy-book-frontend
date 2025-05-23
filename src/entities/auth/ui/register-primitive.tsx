import { routes } from '@/shared/config/routes'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import { FormInput } from '@/shared/ui/forms/form-input'
import { Button } from '@/shared/ui/other/button'
import { Skeleton } from '@/shared/ui/other/skeleton'
import Text from '@/shared/ui/view/text'
import Link from 'next/link'
import React from 'react'

export const RegisterPrimitive: React.FC = () => {
	return (
		<>
			<div className='flex flex-col gap-1'>
				<FormInput name='fisrtName' placeholder='Введите имя...' label='Имя' />
				<FormInput
					name='lastName'
					placeholder='Введите фамилию...'
					label='Фамилия'
				/>
				<FormInput
					name='email'
					placeholder='Введите электронную почту...'
					label='E-mail'
					type='text'
				/>
				<FormInput
					name='password'
					placeholder='Введите пароль...'
					label='Пароль'
					type='password'
				/>
				<FormInput
					name='passwordRepeat'
					placeholder='Повторите пароль...'
					label='Повторите пароль'
					type='password'
				/>
			</div>
			<Button variant={'primary'} type='submit' className='mt-6 py-3 h-10  '>
				Зарегистрироваться
			</Button>
			<Skeleton className='w-9/12 h-20 self-center' />
			<div className='flex flex-col justify-center items-center '>
				<UiTooltip
					content='Для восстановления пароля перейдите по этой ссылке'
					className='max-w-56'
				>
					<Link href={routes.auth.reset} className='inline-flex'>
						<Text size='small' className='hover:underline text-indigo-600'>
							Забыли пароль?
						</Text>
					</Link>
				</UiTooltip>
			</div>
		</>
	)
}

import { ReCaptcha } from './recaptcha'
import { routes } from '@/shared/config/routes'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import { FormInput } from '@/shared/ui/forms/form-input'
import { Button } from '@/shared/ui/other/button'
import Text from '@/shared/ui/view/text'
import Link from 'next/link'
import React from 'react'

export const LoginPrimitive: React.FC<{
	isLoading: boolean
	token: string
	setToken: (token: string) => void
}> = ({ isLoading, setToken, token }) => {
	return (
		<>
			<div className='flex flex-col gap-1'>
				<FormInput name='role' hidden />

				<FormInput
					name='email'
					placeholder='Введите электронную почту...'
					label='E-mail'
					type='text'
					disabled={isLoading}
				/>
				<FormInput
					name='password'
					placeholder='Введите пароль...'
					label='Пароль'
					type='password'
					disabled={isLoading}
				/>
			</div>
			{!token ? (
				<UiTooltip content='Подтвердите, что вы не робот'>
					<Button type='button' variant={'primary'} className='mt-6 h-10 py-3'>
						Войти
					</Button>
				</UiTooltip>
			) : (
				<Button
					variant={'primary'}
					type='submit'
					className='mt-6 h-10 py-3'
					disabled={isLoading || !token}
				>
					Войти
				</Button>
			)}
			<ReCaptcha setToken={setToken} />
			<div className='flex flex-col items-center justify-center'>
				<UiTooltip
					content='Для восстановления пароля перейдите по этой ссылке'
					className='max-w-56'
				>
					<Link href={routes.auth.reset} className='inline-flex'>
						<Text size='small' className='text-indigo-600 hover:underline'>
							Забыли пароль?
						</Text>
					</Link>
				</UiTooltip>
			</div>
		</>
	)
}

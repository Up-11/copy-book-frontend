import { useDeactivateAccountMutation } from '@/shared/api/graphql/generated/output'
import { routes } from '@/shared/config/routes'
import { useIsAuth } from '@/shared/hooks/is-auth'
import {
	deactivateAccountSchema,
	TypeDeactivateAccountSchema
} from '@/shared/schemas/deactivate-account/deactivate-account.schema'
import { UiInputOtp } from '@/shared/ui/custom/ui-input-otp'
import { ErrorText } from '@/shared/ui/forms/error-text'
import { FormInput } from '@/shared/ui/forms/form-input'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui/modals/dialog'
import { Button } from '@/shared/ui/other/button'
import { Alert, AlertDescription, AlertTitle } from '@/shared/ui/view/alert'
import { zodResolver } from '@hookform/resolvers/zod'
import { CircleAlert, Shield, Trash2, Mail } from 'lucide-react'
import { PropsWithChildren, useMemo, useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface DeactivateAccountModalProps {
	onSuccess?: () => void
	currentEmail?: string
}

export const DeactivateAccountModal: React.FC<
	PropsWithChildren<DeactivateAccountModalProps>
> = ({ children, onSuccess, currentEmail }) => {
	const { logout } = useIsAuth()
	const [deactivate, { loading: isLoading }] = useDeactivateAccountMutation({
		onCompleted(data) {
			if (data.deactivateAccount.message) {
				toast.success(data.deactivateAccount.message)
				return
			}
			if (data.deactivateAccount.user?.id) {
				logout(
					routes.auth.deactivated + `?userId=${data.deactivateAccount.user?.id}`
				)
			}
		},
		onError(error) {
			toast.error(error.message)
		}
	})
	const [confirmationText, setConfirmationText] = useState('')

	const form = useForm<TypeDeactivateAccountSchema>({
		resolver: zodResolver(deactivateAccountSchema),
		defaultValues: {
			email: '',
			password: '',
			token: ''
		}
	})

	const watchEmail = form.watch('email')
	const watchPassword = form.watch('password')

	const canSendCode = watchEmail && watchPassword && !isLoading

	const handleSendToken = async () => {
		if (!canSendCode) return
		deactivate({
			variables: {
				data: {
					email: form.getValues('email'),
					password: form.getValues('password')
				}
			}
		})
	}

	const onSubmit = async (data: TypeDeactivateAccountSchema) => {
		deactivate({
			variables: {
				data: {
					email: data.email,
					password: data.password,
					token: data.token
				}
			}
		})
	}

	const canSubmit =
		isLoading ||
		!form.getValues().email ||
		!form.getValues().password ||
		!form.getValues().token ||
		!form.formState.isValid ||
		confirmationText !== 'УДАЛИТЬ'

	const DeactivateAccountContent = useMemo(() => {
		return (
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
				<div className='grid grid-cols-2 gap-6'>
					<div className='space-y-4'>
						<FormInput
							label='Ваш email'
							type='email'
							name='email'
							placeholder='Введите ваш текущий email'
							disabled={isLoading}
						/>

						<FormInput
							label='Текущий пароль'
							type='password'
							name='password'
							placeholder='Введите ваш пароль'
							disabled={isLoading}
						/>

						<div className='flex items-start justify-evenly gap-2'>
							<div className='flex flex-col'>
								<label>Код подтверждения</label>
								<Controller
									name='token'
									control={form.control}
									render={({ field }) => (
										<UiInputOtp
											value={field.value || ''}
											onChange={field.onChange}
										/>
									)}
								/>
								{form.formState.errors.token && (
									<ErrorText
										text={form.formState.errors.token.message!}
										className='text-red-500'
									/>
								)}
							</div>
							<div className='flex flex-col justify-end self-end pb-1'>
								<Button
									type='button'
									variant='outline'
									size='sm'
									onClick={handleSendToken}
									disabled={!canSendCode}
									className='whitespace-nowrap'
									loading={isLoading}
								>
									<Mail className='mr-2 h-4 w-4' />
									Получить код
								</Button>
							</div>
						</div>

						<div className='rounded-lg border border-amber-200 bg-amber-50 p-3'>
							<div className='space-y-2'>
								<p className='text-sm font-medium text-amber-800'>
									Подтвердите удаление
								</p>
								<input
									type='text'
									value={confirmationText}
									onChange={e => setConfirmationText(e.target.value)}
									placeholder='Введите УДАЛИТЬ'
									className='w-full rounded border border-amber-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500'
									disabled={isLoading}
								/>
							</div>
						</div>
					</div>

					<div className='space-y-4'>
						<Alert variant='destructive' className='border-red-200 bg-red-50'>
							<CircleAlert className='h-4 w-4 text-red-600' />
							<AlertTitle className='text-red-800'>Опасная операция</AlertTitle>
							<AlertDescription className='mt-2 space-y-2 text-red-700'>
								<p>• Все данные будут удалены через 30 дней</p>
								<p>• Восстановление возможно только через поддержку</p>
								<p>• Прогресс обучения будет утерян</p>
								<p>• Созданные материалы будут удалены</p>
							</AlertDescription>
						</Alert>

						<Alert className='border-blue-200 bg-blue-50'>
							<Shield className='h-4 w-4 text-blue-600' />
							<AlertTitle className='text-blue-800'>
								Процесс деактивации
							</AlertTitle>
							<AlertDescription className='mt-2 space-y-2 text-blue-700'>
								<p>1. Введите email и пароль</p>
								<p>2. Получите код на почту</p>
								<p>3. Введите код подтверждения</p>
								<p>4. Подтвердите действие</p>
							</AlertDescription>
						</Alert>
					</div>
				</div>

				<Button
					type='submit'
					className='w-full bg-red-600 py-3 text-base text-white hover:bg-red-700'
					disabled={canSubmit || isLoading}
				>
					<Trash2 className='mr-2 h-5 w-5' />
					Деактивировать аккаунт
				</Button>
			</form>
		)
	}, [form, isLoading, canSubmit, confirmationText, canSendCode])

	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className='z-[1100] max-h-screen max-w-[70%]'>
				<DialogHeader>
					<DialogTitle>Деактивация аккаунта</DialogTitle>
					<DialogDescription>
						Подтвердите вашу личность для деактивации аккаунта
					</DialogDescription>
				</DialogHeader>
				<FormProvider {...form}>{DeactivateAccountContent}</FormProvider>
			</DialogContent>
		</Dialog>
	)
}

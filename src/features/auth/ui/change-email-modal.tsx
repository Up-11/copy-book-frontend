import { routes } from '@/shared/config/routes'
import { useChangeEmailMutation } from '@/shared/graphql/generated/output'
import { useIsAuth } from '@/shared/hooks/is-auth'
import {
	changeEmailSchema,
	TypeChangeEmailSchema
} from '@/shared/schemas/profile/change-email-schema'
import { useAuthStore } from '@/shared/store/auth-store'
import { FormInput } from '@/shared/ui/forms/form-input'
import { Modal } from '@/shared/ui/modals/modal'
import { Button } from '@/shared/ui/other/button'
import { Alert, AlertDescription, AlertTitle } from '@/shared/ui/view/alert'
import { zodResolver } from '@hookform/resolvers/zod'
import { CircleAlert, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { PropsWithChildren, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface ChangeEmailModalProps {
	onSuccess?: () => void
}

export const ChangeEmailModal: React.FC<
	PropsWithChildren<ChangeEmailModalProps>
> = ({ children, onSuccess }) => {
	const currentEmail = useAuthStore(state => state.email)
	const router = useRouter()
	const [mutate, { loading: isLoading }] = useChangeEmailMutation({
		onCompleted: () => {
			toast.success('На новую почту отправлено письмо с подтверждением')
			onSuccess?.()
			router.replace(
				routes.auth.verifyEmail + `?email=${form.getValues('newEmail')}`
			)
		},
		onError: error => {
			toast.error(error.message)
		}
	})

	const form = useForm<TypeChangeEmailSchema>({
		resolver: zodResolver(changeEmailSchema),
		defaultValues: {
			newEmail: ''
		}
	})

	const onSubmit = async (data: TypeChangeEmailSchema) => {
		mutate({
			variables: {
				data: {
					email: data.newEmail
				}
			}
		})
	}

	const canSubmit =
		isLoading || !form.getValues().newEmail || !form.formState.isValid

	const ChangeEmailContent = useMemo(() => {
		return (
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
				{currentEmail && (
					<div className='rounded-lg border border-blue-200 bg-blue-50 p-3'>
						<div className='flex items-center gap-2 text-sm text-blue-800'>
							<Mail className='h-4 w-4' />
							<span>
								Текущий email: <strong>{currentEmail}</strong>
							</span>
						</div>
					</div>
				)}

				<FormInput
					label='Новый email'
					type='email'
					name='newEmail'
					placeholder='Введите новый email'
					disabled={isLoading}
				/>

				<Alert variant='destructive'>
					<CircleAlert className='h-4 w-4' />
					<AlertTitle>Внимание!</AlertTitle>
					<AlertDescription className='mt-2'>
						После смены email он станет вашим новым логином для входа. На новую
						почту будет отправлено письмо с подтверждением. Пожалуйста,
						убедитесь, что вы ввели правильный email и проверьте его в папке
						"Спам".
					</AlertDescription>
				</Alert>

				<Button type='submit' className='w-full' disabled={canSubmit}>
					{isLoading ? 'Изменеие email...' : 'Сменить email'}
				</Button>
			</form>
		)
	}, [form, isLoading, canSubmit, currentEmail])

	return (
		<Modal
			title='Смена электронной почты'
			description='Обновите email для входа в аккаунт и получения уведомлений'
			content={<FormProvider {...form}>{ChangeEmailContent}</FormProvider>}
		>
			{children}
		</Modal>
	)
}

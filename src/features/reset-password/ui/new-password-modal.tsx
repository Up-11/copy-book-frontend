import { useChangePasswordMutation } from '@/shared/api/graphql/generated/output'
import {
	newPasswordSchema,
	TypeNewPasswordSchema
} from '@/shared/schemas/auth/new-password.schema'
import { FormInput } from '@/shared/ui/forms/form-input'
import { Modal } from '@/shared/ui/modals/modal'
import { Button } from '@/shared/ui/other/button'
import { Alert, AlertDescription, AlertTitle } from '@/shared/ui/view/alert'
import { zodResolver } from '@hookform/resolvers/zod'
import { CircleAlert } from 'lucide-react'
import { PropsWithChildren, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface NewPasswordModalProps {
	onSuccess?: () => void
}

export const NewPasswordModal: React.FC<
	PropsWithChildren<NewPasswordModalProps>
> = ({ children, onSuccess }) => {
	const [mutate, { loading: isLoading }] = useChangePasswordMutation({
		onCompleted: () => {
			toast.success('Пароль успешно изменен')
			onSuccess?.()
		},
		onError: error => {
			toast.error(error.message)
		}
	})

	const form = useForm<TypeNewPasswordSchema>({
		resolver: zodResolver(newPasswordSchema),
		defaultValues: {
			currentPassword: '',
			newPassword: '',
			confirmPassword: ''
		}
	})

	const onSubmit = async (data: TypeNewPasswordSchema) => {
		mutate({
			variables: {
				data: {
					oldPassword: data.currentPassword,
					newPassword: data.newPassword
				}
			}
		})
	}

	const canSubmit =
		isLoading ||
		!form.getValues().currentPassword ||
		!form.getValues().newPassword ||
		!form.getValues().confirmPassword ||
		!form.formState.isValid

	const ChangePasswordContent = useMemo(() => {
		return (
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
				<FormInput
					label='Текущий пароль'
					type='password'
					name='currentPassword'
					placeholder='Введите текущий пароль'
					disabled={isLoading}
				/>

				<FormInput
					label='Новый пароль'
					type='password'
					name='newPassword'
					placeholder='Придумайте новый пароль'
					disabled={isLoading}
					helpText='Минимум 8 символов, включая заглавные и строчные буквы, цифры'
				/>

				<FormInput
					label='Подтвердите новый пароль'
					type='password'
					name='confirmPassword'
					placeholder='Повторите новый пароль'
					disabled={isLoading}
				/>

				<Alert variant='destructive'>
					<CircleAlert className='h-4 w-4' />
					<AlertTitle>Внимание!</AlertTitle>
					<AlertDescription className='mt-2'>
						После смены пароля все активные сессии будут завершены, и вам
						потребуется войти в аккаунт заново.
					</AlertDescription>
				</Alert>

				<Button type='submit' className='w-full' disabled={canSubmit}>
					{isLoading ? 'Смена пароля...' : 'Сменить пароль'}
				</Button>
			</form>
		)
	}, [form, isLoading, canSubmit])

	return (
		<Modal
			title='Смена пароля'
			description='Обновите пароль для защиты вашего аккаунта'
			content={<FormProvider {...form}>{ChangePasswordContent}</FormProvider>}
		>
			{children}
		</Modal>
	)
}

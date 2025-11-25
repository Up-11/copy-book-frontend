'use client'

import { StepItem } from './step-item'
import { useQueryManager } from '@/common/query'
import {
	useNewPasswordMutation,
	useResetPasswordMutation
} from '@/shared/api/graphql/generated/output'
import { routes } from '@/shared/config/routes'
import {
	step1Schema,
	step2Schema,
	step3Schema,
	TypeStep1Form,
	TypeStep2Form,
	TypeStep3Form
} from '@/shared/schemas/auth/reset-password.scemas'
import { UiIcon } from '@/shared/ui/custom/ui-icon'
import { UiInputOtp } from '@/shared/ui/custom/ui-input-otp'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import { ErrorText } from '@/shared/ui/forms/error-text'
import { FormInput } from '@/shared/ui/forms/form-input'
import { Label } from '@/shared/ui/input/label'
import { Button } from '@/shared/ui/other/button'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeftIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useStep } from 'usehooks-ts'

export const ResetPassword: React.FC = () => {
	const router = useRouter()
	const maxSteps = 3

	const [currentStep, helpers] = useStep(maxSteps)
	const { updateQuery, getQueryValue } = useQueryManager()

	const { goToNextStep, reset, setStep } = helpers
	const searchParams = useSearchParams()

	useEffect(() => {
		setStep(Number(getQueryValue('step', 1)))
	}, [])

	const step1Form = useForm<TypeStep1Form>({
		defaultValues: {
			email: searchParams.get('email') || ''
		},
		mode: 'onSubmit',
		resolver: zodResolver(step1Schema)
	})
	const step2Form = useForm<TypeStep2Form>({
		defaultValues: {
			code: searchParams.get('token') || ''
		},
		mode: 'onSubmit',
		resolver: zodResolver(step2Schema)
	})
	const step3Form = useForm<TypeStep3Form>({
		defaultValues: {
			newPassword: '',
			confirmPassword: ''
		},
		mode: 'onSubmit',
		resolver: zodResolver(step3Schema)
	})

	const [sendResetPasswordToken, { loading: step1Loading }] =
		useResetPasswordMutation({
			onCompleted: () => {
				goToNextStep()
				toast.success(
					'Код подтверждения отправлен на указанную электронную почту'
				)
			},
			onError: error => {
				toast.error(error.message)
			}
		})

	const [changePassword, { loading: step3Loading }] = useNewPasswordMutation({
		onCompleted: () => {
			toast.success('Пароль успешно изменен')
			router.push(routes.home)
		},
		onError: error => {
			toast.error(error.message)
		}
	})

	const onStep1Submit = (data: TypeStep1Form) => {
		sendResetPasswordToken({
			variables: { data: { email: data.email } }
		})
		updateQuery({
			step: String(currentStep + 1),
			email: data.email
		})
	}

	const onStep2Submit = (data: TypeStep2Form) => {
		updateQuery({
			step: String(currentStep + 1),
			token: data.code
		})
		goToNextStep()
	}

	const onStep3Submit = (data: TypeStep3Form) => {
		changePassword({
			variables: {
				data: {
					password: data.newPassword,
					passwordRepeat: data.confirmPassword,
					token: step2Form.getValues('code')
				}
			}
		})
	}

	const getInfoByStep = (currentStep: number) => {
		switch (currentStep) {
			case 1: {
				return (
					<FormProvider {...step1Form}>
						<form
							onSubmit={step1Form.handleSubmit(onStep1Submit)}
							className='flex h-full flex-col justify-between'
						>
							<div className='flex h-full w-full flex-col gap-2'>
								<Label htmlFor='email'>
									Введите адрес электронной почты на который придет код
									подтверждения
								</Label>
								<FormInput
									name='email'
									placeholder='Введите электронную почту...'
									label='E-mail'
									type='text'
								/>
							</div>
							<Button
								type='submit'
								loading={step1Loading}
								className='mt-10 md:self-end'
							>
								Отправить код
							</Button>
						</form>
					</FormProvider>
				)
			}
			case 2: {
				return (
					<FormProvider {...step2Form}>
						<form onSubmit={step2Form.handleSubmit(onStep2Submit)}>
							<div className='flex'>
								<div className='flex w-full flex-col gap-4'>
									<Label>Введите код который пришел на электронную почту</Label>
									<div className='mt-2 flex flex-col items-center justify-center gap-2'>
										<Controller
											name='code'
											control={step2Form.control}
											render={({ field }) => (
												<UiInputOtp
													value={field.value || ''}
													onChange={field.onChange}
												/>
											)}
										/>
										{step2Form.formState.errors.code && (
											<ErrorText
												text={step2Form.formState.errors.code.message!}
												className='text-red-500'
											/>
										)}
									</div>

									<Button
										variant={'link'}
										onClick={reset}
										className='justify-start p-0 hover:text-primary/80 hover:underline'
									>
										Отправить письмо на другую почту
									</Button>
								</div>
							</div>
							<div className='flex justify-end'>
								<Button type='submit' className='mt-10 md:self-end'>
									Подтвердить код
								</Button>
							</div>
						</form>
					</FormProvider>
				)
			}
			case 3: {
				return (
					<FormProvider {...step3Form}>
						<form onSubmit={step3Form.handleSubmit(onStep3Submit)}>
							<div className='flex'>
								<div className='flex flex-col gap-2'>
									<div className='flex w-full flex-col gap-2'>
										<FormInput
											name='newPassword'
											placeholder='Введите пароль...'
											label='Введите новый пароль'
											type='password'
										/>
									</div>
									<div className='flex w-full flex-col gap-2'>
										<FormInput
											name='confirmPassword'
											placeholder='Введите пароль...'
											label='	Подтвердите новый пароль'
											type='password'
										/>
									</div>
								</div>
							</div>
							<div className='flex flex-col-reverse justify-between gap-2 md:flex-row'>
								<Button type='button' className='md:self-end' onClick={reset}>
									Сбросить
								</Button>
								<Button
									type='button'
									className='md:self-end'
									onClick={() => setStep(2)}
								>
									Поменять код
								</Button>
								<Button
									type='submit'
									loading={step3Loading}
									className='mt-10 md:self-end'
								>
									Подтвердить смену пароля
								</Button>
							</div>
						</form>
					</FormProvider>
				)
			}
		}
	}
	return (
		<div className='flex flex-col justify-between gap-5'>
			<div>
				<div onClick={router.back} className='absolute left-2 top-2'>
					<UiIcon className='flex h-8 w-8 items-center justify-center rounded-lg text-primary hover:bg-primary/10 hover:text-primary/90'>
						<UiTooltip content='Назад к авторизации'>
							<ArrowLeftIcon />
						</UiTooltip>
					</UiIcon>
				</div>
				<div className='mt-4 flex w-full justify-center gap-10'>
					{Array(maxSteps)
						.fill(maxSteps)
						.map((_, i) => (
							<StepItem
								step={i + 1}
								currentStep={currentStep}
								key={i}
							></StepItem>
						))}
				</div>
			</div>
			<div>
				<Title>Восстановление пароля</Title>
				<Text size='small' color='gray'>
					Проследуйте всем шагам для того, чтобы восстановить пароль
				</Text>
			</div>
			{getInfoByStep(currentStep)}
		</div>
	)
}

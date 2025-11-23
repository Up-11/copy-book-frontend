'use client'

import { useTimer } from '../model/use-timer'
import { getDashboardRoute, routes } from '@/shared/config/routes'
import {
	useResendTokenMutation,
	UserRole,
	useVerifyAccountMutation
} from '@/shared/graphql/generated/output'
import { useAuthStore } from '@/shared/store/auth-store'
import { VerificationStatus } from '@/shared/types/user.types'
import { UiIcon } from '@/shared/ui/custom/ui-icon'
import { UiInputOtp } from '@/shared/ui/custom/ui-input-otp'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import { Button } from '@/shared/ui/other/button'
import { Alert, AlertDescription, AlertTitle } from '@/shared/ui/view/alert'
import { Loader } from '@/shared/ui/view/loader'
import { Label } from '@radix-ui/react-label'
import { ArrowLeftIcon, CircleCheck } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export const VerifyEmail: React.FC = () => {
	const searchParams = useSearchParams()
	const queryToken = searchParams.get('token')
	const router = useRouter()
	const setUserInfo = useAuthStore(state => state.setUserInfo)
	const email = searchParams.get('email')
	const { isActive, value, reset } = useTimer()

	const [token, setToken] = useState(queryToken || '')
	const [state, setState] = useState({
		verificationStatus: VerificationStatus.NOT_STARTED
	})

	const isTokenValid = token && token.length === 6

	const handleToken = (value: string) => {
		setToken(value)
	}

	const sendToken = () => {
		verify({
			variables: {
				data: {
					token
				}
			}
		})
	}

	const handleResendToken = () => {
		resendToken({
			variables: {
				data: {
					email
				}
			}
		})
	}

	const [resendToken] = useResendTokenMutation({
		onCompleted() {
			toast.success('Письмо отправлено повторно')
			reset()
		},
		onError(error) {
			toast.error(error.message)
		}
	})

	const [verify, { loading }] = useVerifyAccountMutation({
		onCompleted(data) {
			toast.success('Верификация прошла успешно')
			setState({
				verificationStatus: VerificationStatus.VERIFIED
			})
			const link = getDashboardRoute(data.verifyAccount.role)

			setUserInfo({
				email: data.verifyAccount.email,
				firstName: data.verifyAccount.firstName,
				lastName: data.verifyAccount.lastName,
				avatar: data.verifyAccount.avatar,
				isAuth: true,
				role: data.verifyAccount.role
			})
			router.push(link)
		},
		onError(error) {
			toast.error(error.message)

			setState({
				verificationStatus: VerificationStatus.FAILED
			})
		}
	})
	useEffect(() => {
		if (isTokenValid) {
			sendToken()
		}
	}, [])

	return (
		<div className='flex flex-col justify-between gap-6'>
			<div onClick={router.back} className='absolute left-2 top-2'>
				<UiIcon className='flex h-8 w-8 items-center justify-center rounded-lg text-primary hover:bg-primary/10 hover:text-primary/90'>
					<UiTooltip content='Назад к авторизации'>
						<ArrowLeftIcon />
					</UiTooltip>
				</UiIcon>
			</div>
			{loading ? (
				<div className='flex items-center justify-center'>
					<Loader />
					<span className='ml-2'>Загрузка...</span>
				</div>
			) : (
				<>
					{state.verificationStatus === VerificationStatus.NOT_STARTED && (
						<>
							<Label className='text-lg'>
								Проверьте введенную электронную почту ({email}) и введите код
							</Label>
							<div className='flex justify-center'>
								<UiInputOtp value={token} onChange={handleToken} />
							</div>
							<Button onClick={sendToken} disabled={token.length !== 6}>
								Отправить код
							</Button>
							<Button
								variant={'outline'}
								onClick={handleResendToken}
								disabled={isActive}
							>
								Отправить письмо повторно {isActive && `(${value} сек.)`}
							</Button>
						</>
					)}
					{state.verificationStatus === VerificationStatus.FAILED && (
						<>
							<Alert>
								<CircleCheck className='size-4' />
								<AlertTitle>Ошибка </AlertTitle>
								<AlertDescription>
									Верификация не удалась. Попробуйте еще раз.
								</AlertDescription>
							</Alert>
							<div className='flex justify-center'>
								<UiInputOtp value={token} onChange={handleToken} />
							</div>
							<Button onClick={sendToken} disabled={token.length !== 6}>
								Отправить код
							</Button>
							<Button
								variant={'outline'}
								onClick={handleResendToken}
								disabled={isActive}
							>
								Отправить письмо повторно {isActive && `(${value} сек.)`}
							</Button>
						</>
					)}
				</>
			)}
		</div>
	)
}

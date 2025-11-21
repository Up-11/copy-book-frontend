'use client'

import { routes } from '@/shared/config/routes'
import {
	UserRole,
	useVerifyAccountMutation
} from '@/shared/graphql/generated/output'
import { useAuthStore } from '@/shared/store/auth-store'
import { useRoleStore } from '@/shared/store/user-role.store'
import { VerificationStatus } from '@/shared/types/user.types'
import { UiInputOtp } from '@/shared/ui/custom/ui-input-otp'
import { Button } from '@/shared/ui/other/button'
import { Alert, AlertDescription, AlertTitle } from '@/shared/ui/view/alert'
import { Loader } from '@/shared/ui/view/loader'
import { Label } from '@radix-ui/react-label'
import { CircleCheck } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export const VerifyEmail: React.FC = () => {
	const searchParams = useSearchParams()
	const queryToken = searchParams.get('token')
	const router = useRouter()
	const setRole = useRoleStore(state => state.setRole)
	const setUserInfo = useAuthStore(state => state.setUserInfo)

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

	const [verify, { loading }] = useVerifyAccountMutation({
		onCompleted(data) {
			toast.success('Верификация прошла успешно')
			setState({
				verificationStatus: VerificationStatus.VERIFIED
			})
			const link =
				data.verifyAccount.role === UserRole.Student
					? routes.dashboard.student
					: routes.dashboard.teacher

			setRole(data.verifyAccount.role)

			setUserInfo({
				email: data.verifyAccount.email,
				firstName: data.verifyAccount.firstName,
				lastName: data.verifyAccount.lastName,
				avatar: data.verifyAccount.avatar
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
								Проверьте введенную электронную почту и введите код
							</Label>
							<div className='flex justify-center'>
								<UiInputOtp value={token} onChange={handleToken} />
							</div>
							<Button onClick={sendToken}>Отправить код</Button>
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
							<Button onClick={sendToken}>Отправить код</Button>
						</>
					)}
				</>
			)}
		</div>
	)
}

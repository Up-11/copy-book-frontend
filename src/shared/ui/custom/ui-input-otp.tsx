import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot
} from '../input/input-otp'
import React from 'react'

export const UiInputOtp: React.FC<{
	disabled?: boolean
	value?: string
	onChange?: (value: string) => void
}> = ({ disabled, value, onChange }) => {
	return (
		<InputOTP
			maxLength={6}
			disabled={disabled}
			value={value}
			onChange={onChange}
		>
			<InputOTPGroup>
				<InputOTPSlot index={0} />
				<InputOTPSlot index={1} />
				<InputOTPSlot index={2} />
			</InputOTPGroup>
			<InputOTPSeparator />
			<InputOTPGroup>
				<InputOTPSlot index={3} />
				<InputOTPSlot index={4} />
				<InputOTPSlot index={5} />
			</InputOTPGroup>
		</InputOTP>
	)
}

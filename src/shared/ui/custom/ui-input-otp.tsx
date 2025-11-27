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
	slotClassName?: string
}> = ({ disabled, value, onChange, slotClassName }) => {
	return (
		<InputOTP
			maxLength={6}
			disabled={disabled}
			value={value}
			onChange={onChange}
		>
			<InputOTPGroup>
				<InputOTPSlot className={slotClassName} index={0} />
				<InputOTPSlot className={slotClassName} index={1} />
				<InputOTPSlot className={slotClassName} index={2} />
			</InputOTPGroup>
			<InputOTPSeparator />
			<InputOTPGroup>
				<InputOTPSlot className={slotClassName} index={3} />
				<InputOTPSlot className={slotClassName} index={4} />
				<InputOTPSlot className={slotClassName} index={5} />
			</InputOTPGroup>
		</InputOTP>
	)
}

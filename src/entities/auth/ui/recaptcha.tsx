import { SmartCaptcha } from '@yandex/smart-captcha'

export const ReCaptcha = ({
	setToken
}: {
	setToken: (token: string) => void
}) => {
	const key = process.env.NEXT_PUBLIC_RAPID_YANDEX_RECAPTCHA_KEY as string

	return <SmartCaptcha language='ru' sitekey={key} onSuccess={setToken} />
}

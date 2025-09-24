'use client'

import QRCodeStyling from 'qr-code-styling'
import React, { useEffect, useRef, useMemo } from 'react'

export const QrCode: React.FC<{ qrUrl: string }> = ({ qrUrl }) => {
	const qrRef = useRef<HTMLDivElement>(null)

	// Создаем экземпляр QR-кода только один раз
	const qrCode = useMemo(
		() =>
			new QRCodeStyling({
				width: 300,
				height: 300,
				type: 'svg',
				data: qrUrl,
				dotsOptions: {
					color: '#4267b2',
					type: 'rounded'
				},
				backgroundOptions: {
					color: '#e9ebee'
				},
				imageOptions: {
					crossOrigin: 'anonymous',
					margin: 20
				}
			}),
		[]
	)

	useEffect(() => {
		qrCode.update({
			data: qrUrl
		})
	}, [qrUrl, qrCode])

	useEffect(() => {
		if (qrRef.current) {
			qrRef.current.innerHTML = ''
			qrCode.append(qrRef.current)
		}

		return () => {
			if (qrRef.current) {
				qrRef.current.innerHTML = ''
			}
		}
	}, [qrCode])

	return <div ref={qrRef} />
}

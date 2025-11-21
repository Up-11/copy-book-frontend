import { useEffect, useState } from 'react'

export const useTimer = (initialValue: number = 60) => {
	const [value, setValue] = useState(initialValue)
	const [isActive, setIsActive] = useState(true)

	useEffect(() => {
		const savedValue = localStorage.getItem('timer.value')
		const savedIsActive = localStorage.getItem('timer.isActive')

		if (savedValue) {
			const parsed = JSON.parse(savedValue)
			setValue(parsed)
		}

		if (savedIsActive) {
			setIsActive(JSON.parse(savedIsActive))
		}
	}, [])

	useEffect(() => {
		if (!isActive || value <= 0) return

		const interval = setInterval(() => {
			const newValue = value - 1
			setValue(newValue)
			localStorage.setItem('timer.value', JSON.stringify(newValue))

			if (newValue <= 0) {
				setIsActive(false)
				localStorage.removeItem('timer.value')
				localStorage.removeItem('timer.isActive')
			}
		}, 1000)

		return () => clearInterval(interval)
	}, [isActive, value])

	useEffect(() => {
		localStorage.setItem('timer.isActive', JSON.stringify(isActive))
	}, [isActive])

	const start = (newValue?: number) => {
		const val = newValue ?? initialValue
		setValue(val)
		setIsActive(true)
	}

	const stop = () => setIsActive(false)

	const reset = () => {
		setValue(initialValue)
		setIsActive(true)
	}

	return { value, isActive, start, stop, reset }
}

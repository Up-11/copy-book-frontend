import { useEffect, useState } from 'react'

export const useHeader = () => {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		let ticking = false

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const shouldBeScrolled = window.scrollY > 0

					if (shouldBeScrolled !== isScrolled) {
						setIsScrolled(shouldBeScrolled)
					}

					ticking = false
				})

				ticking = true
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [isScrolled])

	return { isScrolled }
}

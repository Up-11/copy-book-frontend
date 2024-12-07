import { useEffect, useState } from 'react'

export const useScrollToTop = () => {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		let ticking = false

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const shouldBeScrolled = window.scrollY > 200

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

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

	return { scrollToTop, isScrolled }
}

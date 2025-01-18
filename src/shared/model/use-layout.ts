import { useLayoutStore } from '@/shared/store/layout-store'
import { useEffect, useState } from 'react'

export const useLayout = () => {
	const layout = useLayoutStore(state => state.layout)
	const [isHydrated, setIsHydrated] = useState(false)
	const checkHydration = () => {
		const hydrated = useLayoutStore.persist.hasHydrated()
		setIsHydrated(hydrated)
	}

	const setActiveLayout = useLayoutStore(state => state.setLayout)

	useEffect(() => {
		checkHydration()
	}, [])

	return { layout, setActiveLayout, checkHydration, isHydrated }
}

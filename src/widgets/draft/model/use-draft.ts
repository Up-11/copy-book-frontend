import { useDraftStore } from '../store/draft.store'
import { useEffect, useState } from 'react'

export const useDraft = () => {
	const layout = useDraftStore(state => state.layout)
	const [isHydrated, setIsHydrated] = useState(false)
	const checkHydration = () => {
		const hydrated = useDraftStore.persist.hasHydrated()
		setIsHydrated(hydrated)
	}

	const setActiveLayout = useDraftStore(state => state.setLayout)

	useEffect(() => {
		checkHydration()
	}, [])

	return { layout, setActiveLayout, checkHydration, isHydrated }
}

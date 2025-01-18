import { useEffect, useRef, useState } from 'react'
import { useEventListener } from 'usehooks-ts'

export const useSearchBarVisual = () => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false)
	const [isAnimationComplete, setIsAnimationComplete] = useState(false)

	const inputRef = useRef<HTMLInputElement>(null)
	const searchBarRef = useRef<HTMLDivElement>(null)

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			setIsExpanded(false)
			setIsAnimationComplete(false)
		}
	}
	const handleClickOutside = (e: MouseEvent) => {
		if (
			searchBarRef.current &&
			!searchBarRef.current.contains(e.target as Node)
		) {
			setIsExpanded(false)
			setIsAnimationComplete(false)
		}
	}
	const onClickExpand = () => {
		setIsExpanded(true)
	}
	useEffect(() => {
		if (isExpanded && inputRef.current) {
			inputRef.current.focus()
		}
	}, [isExpanded])
	useEventListener('keydown', handleKeyDown)
	useEventListener('mousedown', handleClickOutside)
	return {
		isExpanded,
		onClickExpand,
		inputRef,
		searchBarRef,
		isAnimationComplete,
		setIsAnimationComplete
	}
}

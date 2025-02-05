import { Variants } from 'motion/react'
import { useState } from 'react'

export const useSidebar = <T extends { value: string; displayedName: string }>(
	tabs: T[]
) => {
	type TabValue = string

	const [activeTab, setActiveTab] = useState<TabValue>(tabs[0]?.value || '')

	const tabContentVariants: Variants = {
		initial: { opacity: 0, y: 10 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -10 }
	}

	const motionConfig = {
		layoutId: 'tab-highlight',
		className: 'absolute top-0 left-0 h-full bg-indigo-200 rounded-lg',
		style: (tabsLength: number) => ({
			width: `${100 / tabsLength}%`
		}),
		initial: false,
		transition: {
			type: 'spring',
			stiffness: 900,
			damping: 50
		},
		animate: (index: number) => ({
			transform: `translateX(${index * 100}%)`
		})
	}

	const activeTabIndex = tabs.findIndex(tab => tab.value === activeTab)

	return {
		activeTabIndex,
		motionConfig,
		tabContentVariants,
		setActiveTab,
		activeTab
	}
}

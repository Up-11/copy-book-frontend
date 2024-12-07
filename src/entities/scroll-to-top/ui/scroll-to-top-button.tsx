'use client'
import { ArrowUp } from 'lucide-react'
import React from 'react'
import { useScrollToTop } from '../model/use-scroll-to-top'
import { cn } from '@/shared/lib/css'
import './scroll-to-top.styles.scss'

export const ScrollToTopButton: React.FC = () => {
	const { scrollToTop, isScrolled } = useScrollToTop()
	return (
		<div
			onClick={scrollToTop}
			className={cn(
				'scroll-to-top sticky cursor-pointer opacity-0  bottom-5 left-full mr-5 mb-2 inline-flex bg-indigo-400 text-white rounded-full p-2 text-center z-50 animate-smoothIn ',
				isScrolled ? 'opacity-100' : 'opacity-0'
			)}
		>
			<ArrowUp className='w-6 h-6' />
		</div>
	)
}

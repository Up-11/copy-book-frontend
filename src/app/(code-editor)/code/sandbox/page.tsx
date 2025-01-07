import { Sandbox } from '@/widgets/sandbox'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Песочница'
}

export default function SandboxPage() {
	return (
		<div className='h-screen bg-zinc-800 py-1 text-white'>
			<Sandbox />
		</div>
	)
}

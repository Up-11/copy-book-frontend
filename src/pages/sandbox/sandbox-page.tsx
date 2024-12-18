import { Sandbox } from '@/widgets/sandbox'
import React from 'react'

export const SandboxPage: React.FC = () => {
	return (
		<div className='h-screen bg-zinc-800 py-1 text-white'>
			<Sandbox />
		</div>
	)
}

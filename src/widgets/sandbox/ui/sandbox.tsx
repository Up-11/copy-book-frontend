'use client'

import { SandboxHeader } from './sandbox-header'
import {
	CodeEditor,
	EditorFooter,
	OutputWindow,
	useCompileCodeStore
} from '@/features/code-editor'
import { routes } from '@/shared/config/routes'
import { Button } from '@/shared/ui/other/button'
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup
} from '@/shared/ui/other/resizable'
import Title from '@/shared/ui/view/title'
import Link from 'next/link'
import React from 'react'

export const Sandbox: React.FC = () => {
	const outputDetails = useCompileCodeStore(state => state.outputDetails)
	const isPending = useCompileCodeStore(state => state.isProcessing)
	return (
		<>
			<SandboxHeader />
			<main className='h-[92vh]'>
				<ResizablePanelGroup direction='horizontal'>
					<ResizablePanel minSize={25} defaultSize={50}>
						<CodeEditor />
					</ResizablePanel>
					<ResizableHandle className='w-[5px] bg-transparent active:bg-indigo-400' />
					<ResizablePanel minSize={25} defaultSize={50}>
						<div className='flex h-full flex-col justify-between'>
							<div className='p-layout'>
								<h1 className='mb-2 text-xl font-bold'>Результат</h1>

								<OutputWindow
									isPending={isPending}
									outputDetails={outputDetails}
								/>
							</div>
							<article className='m-4 rounded-md bg-zinc-700 p-layout'>
								<div className='flex flex-col gap-4'>
									<Title color='white'>
										Войдите в аккаунт, чтобы сохранить черновик!
									</Title>
									<div>
										<Link href={routes.auth.student}>
											<Button size={'default'} variant={'primary'}>
												Войти в аккаунт
											</Button>
										</Link>
									</div>
								</div>
							</article>
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</main>
			<EditorFooter />
		</>
	)
}

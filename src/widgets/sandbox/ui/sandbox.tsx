import { SandboxHeader } from './sandbox-header'
import { CodeEditor, EditorFooter, OutputWindow } from '@/features/code-editor'
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
						<div className='flex flex-col justify-between h-full'>
							<OutputWindow />
							<article className='m-4 p-layout rounded-md bg-zinc-700'>
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

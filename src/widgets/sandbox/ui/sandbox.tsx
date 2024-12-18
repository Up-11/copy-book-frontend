import React from 'react'
import { SandboxHeader } from './sandbox-header'
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup
} from '@/shared/ui/other/resizable'
import { CodeEditor, EditorFooter } from '@/features/code-editor'

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
						Two
					</ResizablePanel>
				</ResizablePanelGroup>
			</main>
			<EditorFooter />
		</>
	)
}

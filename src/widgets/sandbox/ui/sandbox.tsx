import { SandboxHeader } from './sandbox-header'
import { CodeEditor, EditorFooter, OutputWindow } from '@/features/code-editor'
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup
} from '@/shared/ui/other/resizable'
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
						<OutputWindow />
					</ResizablePanel>
				</ResizablePanelGroup>
			</main>
			<EditorFooter />
		</>
	)
}

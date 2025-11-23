import { DialogProps } from '@radix-ui/react-dialog'

export interface PropsWithClassName {
	className?: string
}

export interface ModalProps extends DialogProps {
	children: React.ReactNode
	title?: string
	description?: string
	content?: React.ReactNode
	className?: string
	footer?: React.ReactNode
}

export enum Layout {
	LIST = 'list',
	GRID = 'grid'
}

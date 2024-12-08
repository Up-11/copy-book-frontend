export interface PropsWithClassName {
	className?: string
}

export interface ModalProps {
	children: React.ReactNode
	title?: string
	description?: string
	content: React.ReactNode
	className?: string
	footer?: React.ReactNode
}

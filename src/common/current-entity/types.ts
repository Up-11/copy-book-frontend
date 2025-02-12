export interface ICurrentEntityProps {
	title: string
	description?: string
	renderDescription?: () => React.ReactNode
	renderFooter?: () => React.ReactNode
	renderHeaderElement?: () => React.ReactNode
	renderUnusualItems?: () => React.ReactNode
	renderProgressBar?: () => React.ReactNode
	items: {
		name: string
		content?: string | number
		condition?: boolean
	}[]
}

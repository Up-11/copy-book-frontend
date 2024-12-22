import React from 'react'

interface Props {
	title?: string
}

export const RenamedTitle: React.FC<Props> = ({ title = 'Без названия' }) => {
	return <div>{title}</div>
}

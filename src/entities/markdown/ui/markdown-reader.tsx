import './md-reader.css'
import React from 'react'
import { Editor, EditorProvider } from 'react-simple-wysiwyg'

export const MarkdownReader: React.FC<{ text: string }> = ({ text }) => {
	return (
		<EditorProvider>
			<Editor value={text} disabled />
		</EditorProvider>
	)
}

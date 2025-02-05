import { useCallback, useMemo } from 'react'
import {
	BaseEditor,
	createEditor,
	Editor,
	Transforms,
	Element,
	Node,
	Descendant
} from 'slate'
import { Slate, Editable, withReact, ReactEditor } from 'slate-react'

export type CustomElement = {
	type: string
	children: Descendant[]
}

export type CustomText = {
	text: string
	// Дополнительные свойства для форматирования (если нужны)
	bold?: boolean
	italic?: boolean
	code?: boolean
}

declare module 'slate' {
	interface CustomTypes {
		Editor: BaseEditor & ReactEditor
		Element: CustomElement
		Text: CustomText
	}
}

const initialValue = [
	{
		type: 'paragraph',
		children: [{ text: 'A line of text in a paragraph.' }]
	}
]

export const MarkdownEditor = () => {
	const editor = useMemo(() => withReact(createEditor()), [])

	const renderElement = useCallback(props => {
		switch (props.element.type) {
			case 'code':
				return <CodeElement {...props} />
			default:
				return <DefaultElement {...props} />
		}
	}, [])

	return (
		<Slate editor={editor} initialValue={initialValue}>
			<Editable
				renderElement={renderElement}
				onKeyDown={event => {
					// Проверяем, что нажаты Ctrl и клавиша `
					if (event.key === '`' && event.ctrlKey) {
						event.preventDefault()
						Transforms.setNodes(
							editor,
							{ type: 'code' },
							{ match: n => Element.isElement(n) && Editor.isBlock(editor, n) }
						)
					}
				}}
				placeholder='Enter some text...'
			/>
		</Slate>
	)
}

const DefaultElement = props => {
	return <p {...props.attributes}>{props.children}</p>
}

const CodeElement = props => {
	return (
		<pre {...props.attributes}>
			<code>{props.children}</code>
		</pre>
	)
}

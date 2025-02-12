'use client'

import './markdown-editor.styles.css'
import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react'
import React from 'react'
import {
	BtnBold,
	BtnItalic,
	Editor,
	EditorProvider,
	Toolbar,
	BtnBulletList,
	BtnNumberedList,
	BtnStrikeThrough,
	BtnClearFormatting,
	BtnUndo,
	BtnRedo,
	BtnUnderline,
	Separator,
	createButton,
	createDropdown,
	ContentEditableEvent
} from 'react-simple-wysiwyg'

const BtnAlignCenter = createButton(
	'Выравнивание по центру',
	<AlignCenter size={18} />,
	'justifyCenter'
)
const BtnAlignLeft = createButton(
	'Выравнивание по левому краю',

	<AlignLeft size={18} />,
	'justifyLeft'
)
const BtnAlignRight = createButton(
	'Выравнивание по правому краю',

	<AlignRight size={18} />,

	'justifyRight'
)
const BtnStyles = createDropdown('Стили', [
	['Обычный', 'formatBlock', 'DIV'],
	['Заголовок 1', 'formatBlock', 'H1'],
	['Заголовок 2', 'formatBlock', 'H2'],
	['Код', 'formatBlock', 'PRE']
])

export const MarkdownEditor: React.FC<{
	value: string
	setValue: (value: string) => void
}> = ({ value, setValue }) => {
	function onChange(e: ContentEditableEvent) {
		setValue(e.target.value)
	}

	return (
		<EditorProvider>
			<Editor
				autoFocus
				value={value}
				className='max-h-[70vh] min-h-64 overflow-y-auto rounded-bl-md rounded-br-md border border-primary/60'
				onChange={onChange}
			>
				<Toolbar>
					<div>
						<BtnUndo />
						<BtnRedo />
						<BtnClearFormatting title='Очистить форматирование' />
					</div>
					<Separator />
					<div>
						<BtnAlignLeft />
						<BtnAlignCenter />
						<BtnAlignRight />
					</div>
					<Separator />
					<div>
						<BtnStyles />
					</div>
					<Separator />
					<div>
						<BtnBold title='Жирный текст' />
						<BtnItalic title='С наклоном' />
						<BtnUnderline title='Подчеркнутый' />
						<BtnStrikeThrough title='Перечеркнутный' />
					</div>
					<Separator />
					<div>
						<BtnBulletList title='Маркированный список' />
						<BtnNumberedList title='Нумерованный список' />
					</div>
				</Toolbar>
			</Editor>
		</EditorProvider>
	)
}

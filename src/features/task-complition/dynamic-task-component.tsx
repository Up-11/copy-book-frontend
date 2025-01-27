import { ChooseAnswer } from './ui/choose-answer'
import { CodeAnswer } from './ui/code-answer'
import { DragAndDropAnswer } from './ui/drag-and-drop-answer'
import { WriteAnswer } from './ui/write-answer'
import { TaskType } from '@/shared/types/task.types'

export const DynamicTaskComponent: React.FC<{ type: TaskType }> = ({
	type
}) => {
	const components = {
		[TaskType.ChooseAnswer]: <ChooseAnswer />,
		[TaskType.Code]: <CodeAnswer />,
		[TaskType.DragAndDrop]: <DragAndDropAnswer />,
		[TaskType.Theory]: null,
		[TaskType.WriteAnswer]: <WriteAnswer />
	}

	return <>{components[type] || null}</>
}

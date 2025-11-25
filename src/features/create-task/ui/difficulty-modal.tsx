import { difficultyFilter } from '@/features/filter/filter.data'
import { cn } from '@/shared/lib/css'
import { getBadgeByTaskDifficulty } from '@/shared/lib/map'
import { TaskDifficulty } from '@/shared/types/task.types'
import { Checkbox } from '@/shared/ui/input/checkbox'
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui/modals/dialog'
import { Button } from '@/shared/ui/other/button'
import { Alert, AlertDescription, AlertTitle } from '@/shared/ui/view/alert'
import Text from '@/shared/ui/view/text'
import { ArrowRight, HelpCircle, Check, Info } from 'lucide-react'
import { useState } from 'react'

interface DifficultyModalProps {
	value: TaskDifficulty | null
	onChange: (difficulty: TaskDifficulty) => void
	disabled?: boolean
}

export const DifficultyModal: React.FC<DifficultyModalProps> = ({
	value,
	onChange
}) => {
	const [open, setOpen] = useState(false)

	const difficulty = value && getBadgeByTaskDifficulty(value)

	const handleSelect = (difficulty: TaskDifficulty) => {
		onChange(difficulty)
	}

	const getDifficultyConfig = (level: TaskDifficulty) => {
		switch (level) {
			case TaskDifficulty.Simple:
				return {
					color: 'bg-green-50 border-green-500',
					textColor: 'text-green-700',
					title: 'Легкий уровень',
					description: 'Для начинающих, базовые концепции, простые задачи'
				}
			case TaskDifficulty.Medium:
				return {
					color: 'bg-yellow-50 border-yellow-500',
					textColor: 'text-yellow-700',
					title: 'Средний уровень',
					description: 'Требуются базовые знания, задачи средней сложности'
				}
			case TaskDifficulty.Hard:
				return {
					color: 'bg-red-50 border-red-500',
					textColor: 'text-red-700',
					title: 'Сложный уровень',
					description: 'Для продвинутых, сложные концепции, комплексные задачи'
				}
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button
					variant={'outline'}
					className={cn(
						'w-1/3 border-2 transition-all hover:border-indigo-300',
						difficulty?.classNames,
						'border-gray-200'
					)}
				>
					<span>{difficulty?.text || 'Выберите сложность'}</span>
				</Button>
			</DialogTrigger>
			<DialogContent className='z-[1100] max-w-4xl'>
				<DialogHeader>
					<DialogTitle>Выбор сложности задания</DialogTitle>
				</DialogHeader>

				<div className='grid select-none grid-cols-3 gap-4 py-6'>
					{difficultyFilter.map(item => {
						const config = getDifficultyConfig(item.value as TaskDifficulty)
						const isActive = value === item.value

						return (
							<div
								key={item.value}
								className={cn(
									'relative cursor-pointer rounded-xl border p-6',
									config.color
								)}
								onClick={() => handleSelect(item.value as TaskDifficulty)}
							>
								<div className='flex items-center gap-2'>
									<Checkbox checked={isActive} className='size-4' />

									<Text
										className={cn(
											'self-center text-xl font-bold',
											config.textColor
										)}
									>
										{item.text}
									</Text>
								</div>
								<Text
									size='small'
									className={cn(
										'mt-2 leading-relaxed text-gray-600',
										config.textColor
									)}
								>
									{config.description}
								</Text>
							</div>
						)
					})}
				</div>
				<Alert className='space-x-2'>
					<Info />
					<AlertTitle>Как выбрать подходящую сложность?</AlertTitle>
					<AlertDescription>
						• <strong>Легкий</strong> - для знакомства с темой, базовых понятий
						и первых шагов
						<br />• <strong>Средний</strong> - для закрепления материала и
						практического применения
						<br />• <strong>Сложный</strong> - для проверки глубоких знаний и
						комплексных навыков
					</AlertDescription>
				</Alert>
				<DialogFooter>
					<Button variant='outline' onClick={() => setOpen(false)}>
						Подтвердить
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

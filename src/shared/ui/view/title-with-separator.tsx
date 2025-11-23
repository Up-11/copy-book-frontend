import { Separator } from './separator'
import Title from './title'

export const TitleWithSeparator = ({ title }: { title: string }) => {
	return (
		<>
			<Title size='large'>{title}</Title>
			<Separator className='h-[0.1] w-full bg-black' />
		</>
	)
}

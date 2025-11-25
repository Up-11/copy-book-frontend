import '@/app/styles/fullscreen-loader.css'

export const FullscreenLoader: React.FC = () => {
	return (
		<div className='card'>
			<div className='loader'>
				<p>Подгружаем</p>
				<div className='words'>
					<span className='word'>картинки</span>
					<span className='word'>курсы</span>
					<span className='word'>оценки</span>
					<span className='word'>задания</span>
					<span className='word'>ваши данные</span>
				</div>
			</div>
		</div>
	)
}

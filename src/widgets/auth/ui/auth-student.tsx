'use client'

import { LoginStudent, RegisterStudent } from '@/features/auth'
import { Skeleton } from '@/shared/ui/other/skeleton'
import { LogoWithText } from '@/shared/ui/view/logo-with-text'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/view/tabs'
import Title from '@/shared/ui/view/title'
import { useTabsQuery } from '../model/use-tabs-query'
import { RoleBadge } from '@/shared/ui/view/role-badge'

export const AuthStudent: React.FC = () => {
	const { currentTab, handleTabChange } = useTabsQuery()

	if (currentTab === '') {
		return (
			<div className='flex justify-center bg-gray-300 h-screen'>
				<div className='mt-2 flex flex-col gap-3 items-center'>
					<LogoWithText color='primary' />
					<Skeleton className='w-[300px] h-[400px] rounded-lg' />
				</div>
			</div>
		)
	}

	return (
		<>
			<div className='flex gap-2 items-center mt-2'>
				<LogoWithText color='primary' />
				<RoleBadge role='student' />
			</div>
			<div className='bg-white shadow-lg flex flex-col items-center pt-3 md:rounded-2xl max-md:w-full rounded-xl '>
				<Tabs
					value={currentTab}
					onValueChange={handleTabChange}
					className='mb-2 flex flex-col items-center'
				>
					<TabsList className='flex'>
						<TabsTrigger value='login'>Вход</TabsTrigger>
						<TabsTrigger value='register'>Регистрация</TabsTrigger>
					</TabsList>
					<TabsContent
						value='login'
						className='flex flex-col items-center w-full '
					>
						<Title size='large' color='indigo'>
							Вход
						</Title>
						<LoginStudent />
					</TabsContent>
					<TabsContent value='register' className='flex flex-col items-center'>
						<Title size='large' color='indigo'>
							Регистрация
						</Title>
						<RegisterStudent />
					</TabsContent>
				</Tabs>
			</div>
		</>
	)
}

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client/react'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
	  }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string }
	String: { input: string; output: string }
	Boolean: { input: boolean; output: boolean }
	Int: { input: number; output: number }
	Float: { input: number; output: number }
	DateTime: { input: any; output: any }
}

export type ChangeEmailInput = {
	email: Scalars['String']['input']
}

export type ChangePasswordInput = {
	newPassword: Scalars['String']['input']
	oldPassword: Scalars['String']['input']
}

export type CreateUserInput = {
	email: Scalars['String']['input']
	firstName: Scalars['String']['input']
	lastName: Scalars['String']['input']
	password: Scalars['String']['input']
	role: Scalars['String']['input']
}

export type DeactivateAccountInput = {
	email: Scalars['String']['input']
	password: Scalars['String']['input']
	token?: InputMaybe<Scalars['String']['input']>
}

export type DeactivateModel = {
	__typename?: 'DeactivateModel'
	message?: Maybe<Scalars['String']['output']>
	user?: Maybe<UserModel>
}

export type DeviceModel = {
	__typename?: 'DeviceModel'
	browser: Scalars['String']['output']
	os: Scalars['String']['output']
	type: Scalars['String']['output']
}

export type LocationModel = {
	__typename?: 'LocationModel'
	city: Scalars['String']['output']
	country: Scalars['String']['output']
	latitude: Scalars['Float']['output']
	longitude: Scalars['Float']['output']
}

export type LoginInput = {
	email: Scalars['String']['input']
	password: Scalars['String']['input']
}

export type Mutation = {
	__typename?: 'Mutation'
	changeEmail: Scalars['Boolean']['output']
	changePassword: Scalars['Boolean']['output']
	clearSessionCookie: Scalars['Boolean']['output']
	createUser: Scalars['Boolean']['output']
	deactivateAccount: DeactivateModel
	login: UserModel
	logout: Scalars['Boolean']['output']
	newPassword: Scalars['Boolean']['output']
	removeSession: Scalars['Boolean']['output']
	resetPassword: Scalars['Boolean']['output']
	verifyAccount: UserModel
}

export type MutationChangeEmailArgs = {
	data: ChangeEmailInput
}

export type MutationChangePasswordArgs = {
	data: ChangePasswordInput
}

export type MutationCreateUserArgs = {
	data: CreateUserInput
}

export type MutationDeactivateAccountArgs = {
	data: DeactivateAccountInput
}

export type MutationLoginArgs = {
	data: LoginInput
}

export type MutationNewPasswordArgs = {
	data: NewPasswordInput
}

export type MutationRemoveSessionArgs = {
	id: Scalars['String']['input']
}

export type MutationResetPasswordArgs = {
	data: ResetPasswordInput
}

export type MutationVerifyAccountArgs = {
	data: VerificationInput
}

export type NewPasswordInput = {
	password: Scalars['String']['input']
	passwordRepeat: Scalars['String']['input']
	token: Scalars['String']['input']
}

export type Query = {
	__typename?: 'Query'
	findCurrentSession: SessionModel
	findProfile: UserModel
	findSessionByUser: Array<SessionModel>
	getAllUsers: Array<UserModel>
}

export type ResetPasswordInput = {
	email: Scalars['String']['input']
}

export type SessionMetadataModel = {
	__typename?: 'SessionMetadataModel'
	device: DeviceModel
	ip: Scalars['String']['output']
	location: LocationModel
}

export type SessionModel = {
	__typename?: 'SessionModel'
	createdAt: Scalars['String']['output']
	id: Scalars['String']['output']
	metadata: SessionMetadataModel
	role: UserRole
	userId: Scalars['String']['output']
}

export type UserModel = {
	__typename?: 'UserModel'
	avatar?: Maybe<Scalars['String']['output']>
	bio?: Maybe<Scalars['String']['output']>
	createdAt: Scalars['DateTime']['output']
	deactivatedAt?: Maybe<Scalars['DateTime']['output']>
	email: Scalars['String']['output']
	firstName: Scalars['String']['output']
	id: Scalars['ID']['output']
	isDeactivated: Scalars['Boolean']['output']
	isEmailVerified: Scalars['Boolean']['output']
	lastName: Scalars['String']['output']
	password: Scalars['String']['output']
	role: UserRole
	studentStatisticId?: Maybe<Scalars['String']['output']>
	teacherStatisticId?: Maybe<Scalars['String']['output']>
	updatedAt: Scalars['DateTime']['output']
}

export enum UserRole {
	Admin = 'ADMIN',
	Student = 'STUDENT',
	Teacher = 'TEACHER'
}

export type VerificationInput = {
	token: Scalars['String']['input']
}

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never }>

export type GetAllUsersQuery = {
	__typename?: 'Query'
	getAllUsers: Array<{ __typename?: 'UserModel'; id: string; email: string }>
}

export const GetAllUsersDocument = gql`
	query getAllUsers {
		getAllUsers {
			id
			email
		}
	}
`

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(
	baseOptions?: Apollo.QueryHookOptions<
		GetAllUsersQuery,
		GetAllUsersQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
		GetAllUsersDocument,
		options
	)
}
export function useGetAllUsersLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetAllUsersQuery,
		GetAllUsersQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
		GetAllUsersDocument,
		options
	)
}
export function useGetAllUsersSuspenseQuery(
	baseOptions?:
		| Apollo.SkipToken
		| Apollo.SuspenseQueryHookOptions<
				GetAllUsersQuery,
				GetAllUsersQueryVariables
		  >
) {
	const options =
		baseOptions === Apollo.skipToken
			? baseOptions
			: { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
		GetAllUsersDocument,
		options
	)
}
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>
export type GetAllUsersLazyQueryHookResult = ReturnType<
	typeof useGetAllUsersLazyQuery
>
export type GetAllUsersSuspenseQueryHookResult = ReturnType<
	typeof useGetAllUsersSuspenseQuery
>
export type GetAllUsersQueryResult = Apollo.QueryResult<
	GetAllUsersQuery,
	GetAllUsersQueryVariables
>

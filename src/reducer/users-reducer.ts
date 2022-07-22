import { usersAPI } from "../api/api"
import { AppThunk } from "./store"

const usersReducer = (state: initialStateType = initialState, action: usersReducerType): initialStateType => {

	switch (action.type) {
		case 'FOLLOW': {
			return {
				...state,
				usersData: state.usersData.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u;
				}),
			}
		}
		case 'UNFOLLOW': {
			return {
				...state,
				usersData: state.usersData.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u;
				}),
			}
		}
		case 'SET_USERS': {
			return { ...state, usersData: action.usersData }
		}
		case 'SET_CURRENT_PAGE': {
			return { ...state, currentPage: action.currentPage }
		}
		case 'SET_TOTAL_USERS_COUNT': {
			return { ...state, totalUsersCount: action.totalCount }
		}
		case 'TOGGLE_IS_FETCHING': {
			return { ...state, isFetching: action.isFetching }
		}
		case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId)
			}
		}
		default: return state;
	}
}

export const follow = (userId: number) =>
	({ type: 'FOLLOW', userId } as const)
export const unfollow = (userId: number) =>
	({ type: 'UNFOLLOW', userId } as const)
export const setUsers = (usersData: UsersDataType[]) =>
	({ type: 'SET_USERS', usersData } as const)
export const setCurrentPage = (currentPage: number) =>
	({ type: 'SET_CURRENT_PAGE', currentPage } as const)
export const setTotalUsersCount = (totalCount: number) =>
	({ type: 'SET_TOTAL_USERS_COUNT', totalCount } as const)
export const toggleIsFetching = (isFetching: boolean) =>
	({ type: 'TOGGLE_IS_FETCHING', isFetching } as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) =>
	({ type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId } as const)
export default usersReducer;

export const getUsersTC = (currentPage: number, pageSize: number): AppThunk => (dispatch) => {
	dispatch(toggleIsFetching(true))
	usersAPI.getUsers(currentPage, pageSize)
		.then((res) => {
			dispatch(setUsers(res.items))
			dispatch(setTotalUsersCount(res.totalCount))
		})
		.catch((error) => {
			console.log(error)
		})
		.finally(() => dispatch(toggleIsFetching(false)))
}

export const followTC = (userId: number): AppThunk => (dispatch) => {
	dispatch(toggleFollowingProgress(true, userId))
	usersAPI.follow(userId)
		.then(resultCode => resultCode === 0 ? dispatch(follow(userId)) : null)
		.finally(() => dispatch(toggleFollowingProgress(false, userId)))
}

export const unfollowTC = (userId: number): AppThunk => (dispatch) => {
	dispatch(toggleFollowingProgress(true, userId))
	usersAPI.unfollow(userId)
		.then(resultCode => resultCode === 0 ? dispatch(unfollow(userId)) : null)
		.finally(() => dispatch(toggleFollowingProgress(false, userId)))
}



export type usersReducerType = ReturnType<typeof follow>
	| ReturnType<typeof unfollow>
	| ReturnType<typeof setUsers>
	| ReturnType<typeof setCurrentPage>
	| ReturnType<typeof setTotalUsersCount>
	| ReturnType<typeof toggleIsFetching>
	| ReturnType<typeof toggleFollowingProgress>

export type UsersDataType = {
	id: number
	photos?: PhotosType
	followed?: boolean
	name?: string
	status?: string
	uniqueUrlName?: any
}
type PhotosType = {
	small?: string
	large?: string
}

const initialState = {
	usersData: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
} as InitialType

type InitialType = {
	usersData: UsersDataType[],
	pageSize: number,
	totalUsersCount: number,
	currentPage: number,
	isFetching: boolean,
	followingInProgress: number[]
}

export type initialStateType = typeof initialState
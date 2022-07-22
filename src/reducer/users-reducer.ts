import { usersAPI } from "../api/api"
import { AppThunk } from "./store"


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

const usersReducer = (state: initialStateType = initialState, action: usersReducerType): initialStateType => {

	switch (action.type) {
		case 'FOLLOW': {
			return {
				...state,
				usersData: state.usersData.map(u => {
					if (u.id === action.payload.userId) {
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
					if (u.id === action.payload.userId) {
						return { ...u, followed: false }
					}
					return u;
				}),
			}
		}
		case 'SET_USERS': {
			return { ...state, usersData: action.payload.usersData }
		}
		case 'SET_CURRENT_PAGE': {
			return { ...state, currentPage: action.payload.currentPage }
		}
		case 'SET_TOTAL_USERS_COUNT': {
			return { ...state, totalUsersCount: action.payload.totalCount }
		}
		case 'TOGGLE_IS_FETCHING': {
			return { ...state, isFetching: action.payload.isFetching }
		}
		case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
			return {
				...state,
				followingInProgress: action.payload.isFetching
					? [...state.followingInProgress, action.payload.userId]
					: state.followingInProgress.filter(id => id !== action.payload.userId)
			}
		}
		default: return state;
	}

}

export type usersReducerType = followACType
	| unfollowACType
	| usersDataACType
	| setCurrentPageACType
	| setTotalUsersCountACType
	| toggleIsFetchingACType
	| toggleFollowingProgressType

type followACType = ReturnType<typeof follow>
export const follow = (userId: number) => {
	return {
		type: 'FOLLOW',
		payload: { userId }
	} as const
}

type unfollowACType = ReturnType<typeof unfollow>
export const unfollow = (userId: number) => {
	return {
		type: 'UNFOLLOW',
		payload: { userId }
	} as const
}

type usersDataACType = ReturnType<typeof setUsers>
export const setUsers = (usersData: UsersDataType[]) => {
	return {
		type: 'SET_USERS',
		payload: { usersData }
	} as const
}

type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
	return {
		type: 'SET_CURRENT_PAGE',
		payload: { currentPage }
	} as const
}

type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => {
	return {
		type: 'SET_TOTAL_USERS_COUNT',
		payload: { totalCount }
	} as const
}

type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
	return {
		type: 'TOGGLE_IS_FETCHING',
		payload: { isFetching }
	} as const
}

type toggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
	return {
		type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
		payload: { isFetching, userId }
	} as const
}


export default usersReducer;

export const getUsersTC = (currentPage: number, pageSize: number): AppThunk => (dispatch) => {
	dispatch(toggleIsFetching(true))
	usersAPI.getUsers(currentPage, pageSize)
		.then((res) => {
			dispatch(setUsers(res.data.items))
			dispatch(setTotalUsersCount(res.data.totalCount))
		})
		.catch((error) => {
			console.log(error)
		})
		.finally(() => {
			dispatch(toggleIsFetching(false))
		})
}

export const followTC = (userId: number): AppThunk => (dispatch) => {
	dispatch(toggleFollowingProgress(true, userId))
	usersAPI.follow(userId)
		.then((response: any) => {
			if (response.data.resultCode === 0) {
				dispatch(follow(userId))
			}
		})
		.finally(() => {
			dispatch(toggleFollowingProgress(false, userId))
		})
}

export const unfollowTC = (userId: number): AppThunk => (dispatch) => {
	dispatch(toggleFollowingProgress(true, userId))
	usersAPI.unfollow(userId)
		.then((response: any) => {
			if (response.data.resultCode === 0) {
				dispatch(unfollow(userId))
			}
		})
		.finally(() => {
			dispatch(toggleFollowingProgress(false, userId))
		})
}
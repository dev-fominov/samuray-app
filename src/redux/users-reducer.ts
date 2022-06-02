

export type UsersDataType = {
	id?: string
	photos?: PhotosType
	followed?: boolean
	name?: string
	status?: string
}
type PhotosType = {
	small?: string
	large?: string
}

let initialState = {
	usersData: [] as UsersDataType[],
	pageSize: 10 as number,
	totalUsersCount: 0 as number,
	currentPage: 1 as number,
	isFetching: false as boolean
}

export type initialStateType = typeof initialState

const usersReducer = (state: initialStateType = initialState, action: usersReducerType): initialStateType => {

	switch (action.type) {
		case 'FOLLOW': {
			return {
				...state,
				usersData: state.usersData.map(u => {
					if (u.id === action.payload.userID) {
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
					if (u.id === action.payload.userID) {
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
		default: return state;
	}

}

export type usersReducerType = followACType | unfollowACType | usersDataACType | setCurrentPageACType | setTotalUsersCountACType | toggleIsFetchingACType

type followACType = ReturnType<typeof follow>
export const follow = (userID: string) => {
	return {
		type: 'FOLLOW',
		payload: { userID }
	} as const
}

type unfollowACType = ReturnType<typeof unfollow>
export const unfollow = (userID: string) => {
	return {
		type: 'UNFOLLOW',
		payload: { userID }
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


export default usersReducer;
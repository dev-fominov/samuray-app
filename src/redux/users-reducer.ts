

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
	pageSize: 100,
	totalUsersCount: 0,
	currentPage: 1

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
			return { ...state, totalUsersCount:action.payload.totalCount	  }
		}
		default: return state;
	}

}

export type usersReducerType = followACType | unfollowACType | usersDataACType | setCurrentPageACType | setTotalUsersCountACType

type followACType = ReturnType<typeof followAC>
export const followAC = (userID: string) => {
	return {
		type: 'FOLLOW',
		payload: { userID }
	} as const
}

type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userID: string) => {
	return {
		type: 'UNFOLLOW',
		payload: { userID }
	} as const
}

type usersDataACType = ReturnType<typeof usersDataAC>
export const usersDataAC = (usersData: UsersDataType[]) => {
	return {
		type: 'SET_USERS',
		payload: { usersData }
	} as const
}

type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
	return {
		type: 'SET_CURRENT_PAGE',
		payload: { currentPage }
	} as const
}

type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalCount: number) => {
	return {
		type: 'SET_TOTAL_USERS_COUNT',
		payload: { totalCount }
	} as const
}


export default usersReducer;
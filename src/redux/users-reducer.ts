

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
	usersData: [] as UsersDataType[]
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
			return { ...state, usersData: [...state.usersData, ...action.payload.usersData] }
		}
		default: return state;
	}

}

export type usersReducerType = followACType | unfollowACType | usersDataACType

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


export default usersReducer;
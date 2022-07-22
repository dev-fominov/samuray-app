let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
}

export type initialStateType = typeof initialState

export const authReducer = (state: initialStateType = initialState, action: authReducerType): any => {
	switch (action.type) {
		case 'SET_USER_DATA':
			return {
				...state,
				...action.data,
				isAuth: true
			}
		default: return state
	}
}

export type authReducerType = setAuthUserDataType
// export const setUserData = (userId, email, login) => ()
type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) => {
	return {
		type: 'SET_USER_DATA',
		data: { userId, email, login }
	} as const
}
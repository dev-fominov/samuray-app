import { authAPI } from "../api/api"
import { AppThunk } from "./store"

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
}

export const authReducer = (state: initialStateType = initialState, action: authReducerType): any => {
	switch (action.type) {
		case 'SET_USER_DATA':
			return { ...state, ...action.data, isAuth: true }
		default: return state
	}
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) =>
	({ type: 'SET_USER_DATA', data: { userId, email, login } } as const)


export const getAuthTC = (): AppThunk => (dispatch) => {
	authAPI.getAuth()
		.then((res) => {
			if (res.resultCode === 0) {
				const { id, email, login } = res.data
				dispatch(setAuthUserData(id, email, login))
			} else {
				console.log(res.messages[0])
			}
		})
		.catch((error) => {
			console.log(error)
		})
}

export type initialStateType = typeof initialState
export type authReducerType = ReturnType<typeof setAuthUserData>
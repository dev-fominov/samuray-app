import { v1 } from "uuid"
import { profileAPI, ProfileType } from "../api/api"
import { AppThunk } from "./store"

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
	posts: [
		{ id: v1(), message: 'First Message 1', likesCount: 12 },
		{ id: v1(), message: 'First Message 2', likesCount: 14 },
		{ id: v1(), message: 'First Message 3', likesCount: 16 },
		{ id: v1(), message: 'First Message 4', likesCount: 18 }
	] as PostType[],
	newPostText: '' as string, 
	profile: null as ProfileType | null,
	status: ''
}

export const profileReducer = (state: initialStateType = initialState, action: profileReducerType): initialStateType => {

	switch (action.type) {
		case ADD_POST: {
			return { ...state, posts: [...state.posts, { id: v1(), message: state.newPostText, likesCount: 0 }], newPostText: '' }
		}
		case CHANGE_NEW_TEXT: {
			return { ...state, newPostText: action.newPostText }
		}
		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile }
		}
		case SET_STATUS: {
			return { ...state, status: action.status }
		}
		default: return state;
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST } as const)
export const changeNewTextActionCreator = (newPostText: string) => ({ type: CHANGE_NEW_TEXT, newPostText } as const)
export const setUserProfile = (profile: ProfileType) => ({ type: SET_USER_PROFILE, profile } as const)
export const setStatus = (status: string) => ({ type: SET_STATUS, status } as const)

export const getProfileTC = (userId: string): AppThunk => (dispatch) => {
	profileAPI.getProfile(userId)
		.then(data => dispatch(setUserProfile(data)))
		.catch(error => console.log(error))
}

export const getStatusTC = (userId: string): AppThunk => (dispatch) => {
	profileAPI.getStatus(userId)
		.then(res => dispatch(setStatus(res.data.status)))
		.catch(error => console.log(error))
}


export type initialStateType = typeof initialState
export type profileReducerType = ReturnType<typeof addPostActionCreator> 
| ReturnType<typeof changeNewTextActionCreator>
| ReturnType<typeof setUserProfile>
| ReturnType<typeof setStatus>

export type PostType = {
	id: string
	message: string
	likesCount: number
}

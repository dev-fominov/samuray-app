import { v1 } from "uuid"
import { ProfileType } from "../components/page/Profile/ProfileContainer"

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

export type PostType = {
	id: string
	message: string
	likesCount: number
}

let initialState = {
	posts: [
		{ id: v1(), message: 'First Message 1', likesCount: 12 },
		{ id: v1(), message: 'First Message 2', likesCount: 14 },
		{ id: v1(), message: 'First Message 3', likesCount: 16 },
		{ id: v1(), message: 'First Message 4', likesCount: 18 }
	] as PostType[],
	newPostText: '',
	profile: null as ProfileType | null
}

export type initialStateType = typeof initialState

const profileReducer = (state: initialStateType = initialState, action: profileReducerType): initialStateType => {

	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				posts: [...state.posts, { id: v1(), message: state.newPostText, likesCount: 0 }],
				newPostText: ''
			}
		}
		case CHANGE_NEW_TEXT: {
			return {
				...state,
				newPostText: action.payload.newPostText
			}
		}
		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile }
		}
		default: return state;
	}
}

export type profileReducerType = addPostActionCreatorType | changeNewTextActionCreatorType | setUserProfileType

type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () => {
	return { type: ADD_POST } as const
}

type changeNewTextActionCreatorType = ReturnType<typeof changeNewTextActionCreator>
export const changeNewTextActionCreator = (newPostText: string) => {
	return {
		type: CHANGE_NEW_TEXT,
		payload: { newPostText }
	} as const
}

type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
	return {
		type: SET_USER_PROFILE,
		profile
	} as const
}

export default profileReducer;
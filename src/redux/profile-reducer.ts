import { v1 } from "uuid"
import { ProfileType } from "../components/page/Profile/ProfileContainer"

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
	profile: null as any
}

export type initialStateType = typeof initialState

const profileReducer = (state: initialStateType = initialState, action: profileReducerType): initialStateType => {

	switch (action.type) {
		case 'ADD-POST': {
			return {
				...state,
				posts: [...state.posts, { id: v1(), message: state.newPostText, likesCount: 0 }],
				newPostText: ''
			}
		}
		case 'CHANGE-NEW-TEXT': {
			return {
				...state,
				newPostText: action.payload.newPostText
			}
		}
		case 'SET-USER-PROFILE': {
			return {...state, profile: action.payload.profile}
		}
		default: return state;
	}
}

export type profileReducerType = addPostActionCreatorType | changeNewTextActionCreatorType | setUserProfileType

type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () => {
	return { type: 'ADD-POST' } as const
}

type changeNewTextActionCreatorType = ReturnType<typeof changeNewTextActionCreator>
export const changeNewTextActionCreator = (newPostText: string) => {
	return {
		type: 'CHANGE-NEW-TEXT',
		payload: { newPostText }
	} as const
}
type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
	return {
		type: 'SET-USER-PROFILE',
		payload: { profile }
	} as const
}

export default profileReducer;
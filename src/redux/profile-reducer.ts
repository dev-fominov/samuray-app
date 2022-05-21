import { v1 } from "uuid"

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
	newPostText: '' as string
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
		default: return state;
	}
}

export type profileReducerType = addPostActionCreatorType | changeNewTextActionCreatorType

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

export default profileReducer;
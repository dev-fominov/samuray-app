import { v1 } from "uuid"
import { ProfileType } from "../Types"

let initialState = {
	posts: [
		{ id: v1(), message: 'First Message 1', likesCount: 12 },
		{ id: v1(), message: 'First Message 2', likesCount: 14 },
		{ id: v1(), message: 'First Message 3', likesCount: 16 },
		{ id: v1(), message: 'First Message 4', likesCount: 18 }
	],
	newPostText: ''
}

const profileReducer = (state:ProfileType = initialState, action:profileReducerType) => {

	switch(action.type) {
		case 'ADD-POST': {
			state.posts.push({ id: v1(), message: action.payload.newPostText, likesCount: 0 })
			state.newPostText = ''
			return state;
		}
		case 'CHANGE-NEW-TEXT': {
			state.newPostText = action.payload.newPostText
			return state;
		}
		default: return state;
	}
}

export type profileReducerType = addPostActionCreatorType | changeNewTextActionCreatorType

type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = (newPostText: string) => {
	return  { 
		type: 'ADD-POST', 
		payload: {newPostText} 
	} as const
}

type changeNewTextActionCreatorType = ReturnType<typeof changeNewTextActionCreator>
export const changeNewTextActionCreator = (newPostText: string) => {
	return { 
		type: 'CHANGE-NEW-TEXT', 
		payload: {newPostText} 
	} as const
}

export default profileReducer;
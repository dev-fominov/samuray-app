import { v1 } from "uuid"

const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT"

const profileReducer:any = (state:any, action:any) => {

	switch(action.type) {
		case ADD_POST:
			const newPost = { id: v1(), message: action.newPostText, likesCount: 0 }
			state.posts.push(newPost)
			state.newPostText = ''
			return state;
		case CHANGE_NEW_TEXT:
			state.newPostText = action.newPostText
			return state;
		default:
			return state;
	}
}

export const addPostActionCreator = (newPostText: string) => (
	{ type: ADD_POST, newPostText: newPostText } as const)

export const changeNewTextActionCreator = (newPostText: string) => (
	{ type: CHANGE_NEW_TEXT, newPostText: newPostText } as const)

export default profileReducer;
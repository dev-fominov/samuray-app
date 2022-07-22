import { dialogReducerType } from "./reducer/dialog-reducer"
import { profileReducerType } from "./reducer/profile-reducer"

export type StoreType = {
	_state: StateType
	updateNewPost: (newPostText: string) => void
	addPost: () => void
	_renderTree: ()=>void
	subscribe: (observer: () => void) => void
	getState: ()=>StateType
	dispatch: (action: ActionsTypes)=>void
}

export type StateType = {
	profilePage: ProfileType
	dialogsPage: DialogsType	
}

export type ProfileType = {
	posts: PostType[]
	newPostText: string
}

export type DialogsType = {
	dialogsData: DialogsDataType[]
	messagesData: MessagesDataType[]
	newMessageText: string
}

export type PostType = {
	id: string
	message: string
	likesCount: number 
}

export type DialogsDataType = {
	id: string
	name: string
}

export type MessagesDataType = {
	id: string
	message: string
}

export type ActionsTypes = dialogReducerType | profileReducerType
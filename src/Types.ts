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
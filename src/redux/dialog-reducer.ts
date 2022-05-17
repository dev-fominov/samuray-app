import { v1 } from "uuid"

const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE"
const ADD_MESSAGE = "ADD-MESSAGE"

const dialogReducer:any = (state:any, action:any) => {

	switch(action.type) {
		case CHANGE_NEW_MESSAGE:
			state.newMessageText = action.newMessageText
			return state;
		case ADD_MESSAGE:
			const newMessage = { id: v1(), message: action.newMessageText }
			state.messagesData.push(newMessage)
			state.newMessageText = ''
			return state;
		default: 
			return state;
	}
}


export const changeNewMessageActionCreator = (newMessageText: string) => (
	{ type: CHANGE_NEW_MESSAGE, newMessageText: newMessageText } as const)

export const addMessageActionCreator = (newMessageText: string) => (
	{ type: ADD_MESSAGE, newMessageText: newMessageText } as const)

export default dialogReducer;
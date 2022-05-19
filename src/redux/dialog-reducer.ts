import { v1 } from "uuid"
import { DialogsType } from "../Types";

let initialState = {
	dialogsData: [
		{ id: '1', name: 'Dmitriy' },
		{ id: '2', name: 'Anastasiya' },
		{ id: '3', name: 'Aleksandr' },
		{ id: '4', name: 'Pavel' }
	],
	messagesData: [
		{ id: '1', message: 'message 1' },
		{ id: '2', message: 'message 2' },
		{ id: '3', message: 'message 3' },
		{ id: '4', message: 'message 4' },
		{ id: '5', message: 'message 5' }
	],
	newMessageText: ''
}

const dialogReducer = (state: DialogsType = initialState, action: dialogReducerType) => {

	switch (action.type) {
		case 'CHANGE-NEW-MESSAGE': {
			state.newMessageText = action.payload.newMessageText
			return state;
		}
		case 'ADD-MESSAGE': {
			state.messagesData.push({ id: v1(), message: action.payload.newMessageText })
			state.newMessageText = ''
			return state;
		}
		default: return state;
	}

}

export type dialogReducerType = changeNewMessageActionCreatorType | addMessageActionCreatorType

type changeNewMessageActionCreatorType = ReturnType<typeof changeNewMessageActionCreator>
export const changeNewMessageActionCreator = (newMessageText: string) => {
	return {
		type: 'CHANGE-NEW-MESSAGE',
		payload: { newMessageText }
	} as const
}

type addMessageActionCreatorType = ReturnType<typeof addMessageActionCreator>
export const addMessageActionCreator = (newMessageText: string) => {
	return {
		type: 'ADD-MESSAGE',
		payload: { newMessageText }
	} as const
}


export default dialogReducer;
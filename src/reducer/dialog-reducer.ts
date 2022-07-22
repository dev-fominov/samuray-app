import { v1 } from "uuid"

type DialogsDataType = {
	id: string
	name: string
}

type MessagesDataType = {
	id: string
	message: string
}

let initialState = {
	dialogsData: [
		{ id: v1(), name: 'Dmitriy' },
		{ id: v1(), name: 'Anastasiya' },
		{ id: v1(), name: 'Aleksandr' },
		{ id: v1(), name: 'Pavel' }
	] as DialogsDataType[],
	messagesData: [
		{ id: v1(), message: 'message 1' },
		{ id: v1(), message: 'message 2' },
		{ id: v1(), message: 'message 3' },
		{ id: v1(), message: 'message 4' },
		{ id: v1(), message: 'message 5' }
	] as MessagesDataType[],
	newMessageText: ''
}

export type initialStateType = typeof initialState

const dialogReducer = (state: initialStateType = initialState, action: dialogReducerType): initialStateType => {

	switch (action.type) {
		case 'CHANGE-NEW-MESSAGE': {
			return {
				...state,
				newMessageText: action.payload.newMessageText
			}
		}
		case 'ADD-MESSAGE': {
			return {
				...state,
				messagesData: [...state.messagesData, { id: v1(), message: state.newMessageText }],
				newMessageText: ''
			}
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
export const addMessageActionCreator = () => {
	return { type: 'ADD-MESSAGE' } as const
}


export default dialogReducer;
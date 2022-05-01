import { renderTree } from './../render';
import { v1 } from 'uuid';
import { StateType } from './../Types';

let state: StateType = {

	profilePage: {
		posts: [
			{ id: v1(), message: 'First Message 1', likesCount: 12 },
			{ id: v1(), message: 'First Message 2', likesCount: 14 },
			{ id: v1(), message: 'First Message 3', likesCount: 16 },
			{ id: v1(), message: 'First Message 4', likesCount: 18 }
		],
		newPostText: ''
		
	},

	dialogsPage: {
		dialogsData: [
			{ id: '1', name: 'Dmitriy' },
			{ id: '2', name: 'Anastasiya' },
			{ id: '3', name: 'Aleksandr' },
			{ id: '4', name: 'Pavel' }
		],
		messagesData : [
			{ id: '1', message: 'message 1' },
			{ id: '2', message: 'message 2' },
			{ id: '3', message: 'message 3' },
			{ id: '4', message: 'message 4' },
			{ id: '5', message: 'message 5' }
		]
	}

}

export default state

export const addPost = () => {
	const newPost = { 
		id: v1(), 
		message: state.profilePage.newPostText, 
		likesCount: 0 }
	state.profilePage.posts.push(newPost)
	state.profilePage.newPostText = ''
	renderTree(state)
}

export const updateNewPost = (newPostText: string) => {
	state.profilePage.newPostText = newPostText
	renderTree(state)
}


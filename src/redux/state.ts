import { v1 } from 'uuid';
import { StoreType } from './../Types';

const store: StoreType = {
	_state: {

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
	
	},
	updateNewPost(newPostText: string) {
		this._state.profilePage.newPostText = newPostText
		this._renderTree()
	},
	addPost() {
		const newPost = { id: v1(), message: this._state.profilePage.newPostText, likesCount: 0 }
		this._state.profilePage.posts.push(newPost)
		this._state.profilePage.newPostText = ''
		this._renderTree()
	},
	_renderTree() {
		console.log('asdadsdas')
	},
	subscribe(observer) {
		this._renderTree = observer
	},
	getState() {
		return this._state
	},
	dispatch(action) {
		if(action.type === "ADD-POST") {
			const newPost = { id: v1(), message: action.newPostText, likesCount: 0 }
			this._state.profilePage.posts.push(newPost)
			this._state.profilePage.newPostText = ''
			this._renderTree()
		} else if (action.type === "CHANGE-NEW-TEXT") {
			this._state.profilePage.newPostText = action.newPostText
			this._renderTree()
		}
	}
	
}

export default store
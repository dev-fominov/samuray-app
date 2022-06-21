import { combineReducers, createStore } from 'redux';
import { authReducer } from './auth-reducer';

import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from './users-reducer';

export const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogReducer,
	usersPage: usersReducer,
	auth: authReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);

// @ts-ignore
window.store = store

export default store







// import { combineReducers, createStore } from "redux";
// import dialogReducer from "./dialog-reducer";
// import profileReducer from "./profile-reducer";

// let reducers = combineReducers({
// 	profileReducer,
// 	dialogReducer
// });

// export type appStoreType = ReturnType<typeof reducers>

// let store:appStoreType = createStore(reducers);

// export default store;


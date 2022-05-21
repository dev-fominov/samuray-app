import { combineReducers, createStore } from 'redux';

import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from './users-reducer';

export const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogReducer,
	usersPage: usersReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);


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

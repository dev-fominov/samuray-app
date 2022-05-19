import { combineReducers, createStore } from 'redux';

import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogReducer
});

let store = createStore(reducers);


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


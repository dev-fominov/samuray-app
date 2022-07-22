import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { authReducer, authReducerType } from './auth-reducer';

import dialogReducer, { dialogReducerType } from "./dialog-reducer";
import profileReducer, { profileReducerType } from "./profile-reducer";
import usersReducer, { usersReducerType } from './users-reducer';

export const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogReducer,
	usersPage: usersReducer,
	auth: authReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof rootReducer>
export type AppActionsType = dialogReducerType | profileReducerType | usersReducerType | authReducerType
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<RootState, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActionsType>
// @ts-ignore
window.store = store

// export default store
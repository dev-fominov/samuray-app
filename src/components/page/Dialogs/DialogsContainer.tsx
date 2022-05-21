
// import React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addMessageActionCreator, changeNewMessageActionCreator, initialStateType } from "../../../redux/dialog-reducer";
import { AppStateType } from "../../../redux/redux-store";
import Dialogs from "./Dialogs";

type mapStateToPropsType = {
	dialogsPage: initialStateType
}

type mapDispatchToPropsType = {
	updateNewMessageBody: (newMessageText: string) => void
	addMessage: () => void
}

export type DialogPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
	return {
		updateNewMessageBody: (newMessageText: string) => { dispatch(changeNewMessageActionCreator(newMessageText)) },
		addMessage: () => { dispatch(addMessageActionCreator()) }
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer

// import React from "react";

import { ComponentType } from "react";
import { connect } from "react-redux";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { addMessageActionCreator, changeNewMessageActionCreator, initialStateType } from "../../../reducer/dialog-reducer";
import { AppStateType } from "../../../reducer/store";
import Dialogs from "./Dialogs";

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		dialogsPage: state.dialogsPage
	}
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
	return {
		updateNewMessageBody: (newMessageText: string) => { dispatch(changeNewMessageActionCreator(newMessageText)) },
		addMessage: () => { dispatch(addMessageActionCreator()) }
	}
}

export default compose<ComponentType>(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs)


// TYPES
type mapStateToPropsType = {
	dialogsPage: initialStateType
}

type mapDispatchToPropsType = {
	updateNewMessageBody: (newMessageText: string) => void
	addMessage: () => void
}

export type DialogPropsType = mapStateToPropsType & mapDispatchToPropsType
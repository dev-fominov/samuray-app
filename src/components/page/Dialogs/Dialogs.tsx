import React, { ChangeEvent } from "react";
import { addMessageActionCreator, changeNewMessageActionCreator } from "../../../redux/dialog-reducer";
import { ActionsTypes, DialogsType } from "../../../Types";
import Button from "../../Parts/Button/Button";
import Dialog from "./Dialog";
import s from './Dialogs.module.scss';
import Message from "./Message";

type DialogDataType = {
	state: DialogsType
	dispath: (action: ActionsTypes)=>void
}

function Dialogs(props: DialogDataType) {

	const addMessage = () => {
		props.dispath(addMessageActionCreator(props.state.newMessageText))
	}

	const updateNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		props.dispath(changeNewMessageActionCreator(e.currentTarget.value))
	}

	return (
		<div className={s.content}>
			<div className={s.dialogs}>
				{props.state.dialogsData.map(d => <Dialog name={d.name} id={d.id} />)}
			</div>
			<div className={s.messages}>
				{props.state.messagesData.map(m => <Message id={m.id} message={m.message} />)}
				<div className={s.newMessage}>
				<h2>New message</h2>
				<div className={s.addMessage}>
					<textarea
						onChange={updateNewMessageHandler}
						value={props.state.newMessageText}
					></textarea>
					<Button name={'Add message'} callBack={addMessage} />
				</div>
			</div>
			</div>
		</div>
	)
}

export default Dialogs
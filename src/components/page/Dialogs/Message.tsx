import React from "react";
import s from './Dialogs.module.scss';

export type MessageType = {
	message: string
	id: string
}

function Message(props: MessageType) {
	return (
		<div className={s.message} id={props.id}>{props.message}</div>
	)
}

export default Message
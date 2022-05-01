import React from "react";
import { DialogsType } from "../../../Types";
import Dialog from "./Dialog";
import s from './Dialogs.module.scss';
import Message from "./Message";

type DialogDataType = {
	state: DialogsType
}

function Dialogs(props: DialogDataType) {

	return (
		<div className={s.content}>
			<div className={s.dialogs}>
				{props.state.dialogsData.map(d => <Dialog name={d.name} id={d.id} />)}
			</div>
			<div className={s.messages}>
				{props.state.messagesData.map(m => <Message id={m.id} message={m.message} />)}
			</div>
		</div>
	)
}

export default Dialogs
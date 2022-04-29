import React from "react";
import { PageType } from "../../../App";
import Dialog, { DialogType } from "./Dialog";
import s from './Dialogs.module.scss';
import Message, { MessageType } from "./Message";



function Dialogs(props: PageType) {

	return (
		<div className={s.content}>
			<div className={s.dialogs}>
				{props.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} />)}
			</div>
			{/* <div className={s.messages}>
				{messagesData.map(message => <Message id={message.id} message={message.message} />)}
			</div> */}
		</div>
	)
}

export default Dialogs
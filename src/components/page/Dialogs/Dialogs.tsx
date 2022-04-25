import React from "react";
import Dialog, { DialogType } from "./Dialog";
import s from './Dialogs.module.scss';
import Message, { MessageType } from "./Message";



function Dialogs() {

	let dialogsData: DialogType[] = [
		{ id: '1', name: 'Dmitriy' },
		{ id: '2', name: 'Anastasiya' },
		{ id: '3', name: 'Aleksandr' },
		{ id: '4', name: 'Pavel' }
	]
	let messagesData: MessageType[] = [
		{ id: '1', message: 'message 1' },
		{ id: '2', message: 'message 2' },
		{ id: '3', message: 'message 3' },
		{ id: '4', message: 'message 4' },
		{ id: '5', message: 'message 5' }
	]

	return (
		<div className={s.content}>
			<div className={s.dialogs}>
				{dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} />)}
			</div>
			<div className={s.messages}>
				{messagesData.map(message => <Message id={message.id} message={message.message} />)}
			</div>
		</div>
	)
}

export default Dialogs
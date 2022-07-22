import { ChangeEvent } from "react"
import Button from "../../Parts/Button/Button"
import Dialog from "./Dialog"
import s from './Dialogs.module.scss'
import { DialogPropsType } from "./DialogsContainer"
import Message from "./Message"

function Dialogs(props: DialogPropsType) {

	const onAddMessage = () => props.addMessage()

	const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.updateNewMessageBody(e.currentTarget.value)

	return (
		<div className={s.content}>
			<div className={s.dialogs}>
				{props.dialogsPage.dialogsData.map(d => <Dialog key={d.id} name={d.name} id={d.id} />)}
			</div>
			<div className={s.messages}>
				{props.dialogsPage.messagesData.map(m => <Message key={m.id} id={m.id} message={m.message} />)}
				<div className={s.newMessage}>
				<h2>New message</h2>
				<div className={s.addMessage}>
					<textarea
						onChange={onNewMessageChange}
						value={props.dialogsPage.newMessageText}
					></textarea>
					<Button name={'Add message'} callBack={onAddMessage} />
				</div>
			</div>
			</div>
		</div>
	)
}

export default Dialogs
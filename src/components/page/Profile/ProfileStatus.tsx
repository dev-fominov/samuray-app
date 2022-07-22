import { ChangeEvent, useState } from "react"

type ProfileStatusType = {
	title: string
	onChange: (newValue: string)=>void
}

export const ProfileStatus = (props: ProfileStatusType) => {
	let [edit, setEdit] = useState(false)
	let [title, setTitle] = useState("")

	const activateEdit = () => {
		setEdit(true)
		setTitle(props.title)
	} 
	const activateView = () => {
		setEdit(false)
		props.onChange(title)
	}

	const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value)
	}

	return (
		edit 
		? <input value={title} onBlur={activateView} autoFocus onChange={onChangeTitleHandler} /> 
		: <span onDoubleClick={activateEdit}>{props.title}</span>
	)
}
import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.scss';

export type DialogType = {
	name: string
	id: string
}

function Dialog(props: DialogType) {
	return (
		<div className={s.dialog}>
			<NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
		</div>
	)
}

export default Dialog
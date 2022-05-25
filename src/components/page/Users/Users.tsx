import React from "react";
import { UsersPropsType } from "./UsersContainer";
import s from './Users.module.scss';
import { UsersDataType } from "../../../redux/users-reducer";
// import * as axios from 'axios';
const axios = require('axios').default;

const photoURL = 'https://img.icons8.com/bubbles/50/000000/user.png'

type ResponseType = {
	data: DataType
}

type DataType = {
	items: UsersDataType[]
}

function Users(props: UsersPropsType) {

	if (props.usersPage.usersData.length === 0) {

		axios
			.get("https://social-network.samuraijs.com/api/1.0/users")
			.then((response:ResponseType) => {
				props.setUsers(response.data.items)
			})
	}

	return (
		<div className={s.content}>
			<div className={s.titlePage}>Users</div>
			{props.usersPage.usersData.map(u => {
				return (
					<div key={u.id} className={s.userInfo}>
						<div className={s.left}>
							<div className={s.img}>
								<img src={ u.photos.small != null ? u.photos.small : photoURL} alt="User" />
							</div>
							<div className={s.followed}>
								{u.followed
									? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
									: <button onClick={() => props.follow(u.id)}>Follow</button>
								}
							</div>
						</div>
						<div className={s.right}>
							<span className={s.fullName}>{u.name}</span>
							<span className={s.status}>{u.status}</span>
							<div className={s.location}>
								<span className={s.country}>{"u.location.country"},</span>
								<span className={s.city}>{"u.location.city"}</span>
							</div>

						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Users
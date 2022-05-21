import React from "react";
import { UsersPropsType } from "./UsersContainer";
import s from './Users.module.scss';


function Users(props: UsersPropsType) {
	return (
		<div className={s.content}>
			<div className={s.titlePage}>Users</div>
			{props.usersPage.usersData.map(u => {
				return (
					<div key={u.id} className={s.userInfo}>
						<div className={s.left}>
							<div className={s.img}>
								<img src={u.photoURL} alt="User" />
							</div>
							<div className={s.followed}>
								{u.followed
									? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
									: <button onClick={() => props.follow(u.id)}>Follow</button>
								}
							</div>
						</div>
						<div className={s.right}>
							<span className={s.fullName}>{u.fullName}</span>
							<span className={s.status}>{u.status}</span>
							<div className={s.location}>
								<span className={s.country}>{u.location.country},</span>
								<span className={s.city}>{u.location.city}</span>
							</div>

						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Users
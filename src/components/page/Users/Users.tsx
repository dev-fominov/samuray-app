import React from "react";
import { UsersPropsType } from "./UsersContainer";
import s from './Users.module.scss';

const photoURL = 'https://img.icons8.com/bubbles/50/000000/user.png'

type UsersType = UsersPropsType & { onPageChanged: (p: number) => void }

function Users(props: UsersType) {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div className={s.content}>
			<div className={s.titlePage}>Users</div>
			<div>
				{pages.map(p => {
					return <span
						key={p}
						className={props.currentPage === p ? s.active : ''}
						onClick={(e) => props.onPageChanged(p)}
					>{p}</span>
				})}
			</div>
			{/* {console.log(props)} */}
			{props.usersData.map((u: any) => {
				return (
					<div key={u.id} className={s.userInfo}>
						<div className={s.left}>
							<div className={s.img}>
								<img src={u.photos.small != null ? u.photos.small : photoURL} alt="User" />
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
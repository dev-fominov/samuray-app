import React from "react";
import s from './Users.module.scss';
import { UsersDataType } from "../../../reducer/users-reducer";
import { NavLink } from "react-router-dom";

const photoURL = 'https://img.icons8.com/bubbles/50/000000/user.png'

type UsersType = {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	usersData: UsersDataType[]
	onPageChanged: (pageNumber: number) => void
	followTC: (userId: number) => void
	unfollowTC: (userId: number) => void
	isFetching: boolean
	followingInProgress: number[]
}

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
			{props.usersData.map((u) => {
				return (
					<div key={u.id} className={s.userInfo}>
						<div className={s.left}>
							<div className={s.img}>
								<NavLink to={'/profile/' + u.id} >
									<img src={u.photos?.small != null ? u.photos.small : photoURL} alt="User" />
								</NavLink>
							</div>
							<div className={s.followed}>
								{
								u.followed
									? <button disabled={props.followingInProgress.some(id => id === u.id)} 
									onClick={() => {props.unfollowTC(u.id)}}>Unfollow</button>
									: <button disabled={props.followingInProgress.some(id => id === u.id)} 
									onClick={() => {props.followTC(u.id)}}>Follow</button>
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
					</div >
				)
})}
		</div >
	)
}

export default Users
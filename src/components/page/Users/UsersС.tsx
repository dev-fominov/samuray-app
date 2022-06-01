import React from "react";
import s from './Users.module.scss';
import { UsersDataType } from "../../../redux/users-reducer";
// import * as axios from 'axios';
const axios = require('axios').default;

const photoURL = 'https://img.icons8.com/bubbles/50/000000/user.png'

type ResponseType = {
	data?: DataType
}

type DataType = {
	items?: UsersDataType[]
	totalCount?: number
}

class Users extends React.Component<any, any> {

	// constructor(props:any) {
	//   super(props)
	// }

	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then((response: ResponseType) => {
				this.props.setUsers(response.data?.items);
				this.props.setTotalUsersCount(response.data?.totalCount);
			})
	}

	onPageChanget = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber)
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then((response: ResponseType) => {
				this.props.setUsers(response.data?.items)
			})
	}

	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
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
							className={this.props.currentPage === p ? s.active : ''}
							onClick={e => this.onPageChanget(p)}
						>{p}</span>
					})}
				</div>
				{console.log(this.props)}
				{this.props.usersData.map((u: any) => {
					return (
						<div key={u.id} className={s.userInfo}>
							<div className={s.left}>
								<div className={s.img}>
									<img src={u.photos.small != null ? u.photos.small : photoURL} alt="User" />
								</div>
								<div className={s.followed}>
									{u.followed
										? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
										: <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
}

export default Users
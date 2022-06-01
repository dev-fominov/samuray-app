import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { followAC, initialStateType, setCurrentPageAC, setTotalUsersCountAC, unfollowAC, usersDataAC, UsersDataType } from "../../../redux/users-reducer";
import { AppStateType } from "../../../redux/redux-store";
import Users from "./Users";

// import * as axios from 'axios';
const axios = require('axios').default;

type ResponseType = {
	data?: DataType
}

type DataType = {
	items?: UsersDataType[]
	totalCount?: number
}

type mapStateToPropsType = initialStateType

type mapDispatchToPropsType = {
	follow: (userID: string) => void
	unfollow: (userID: string) => void
	setUsers: (usersData: UsersDataType[]) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersAPIComponent extends React.Component<any, any> {

	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then((response: ResponseType) => {
				this.props.setUsers(response.data?.items);
				this.props.setTotalUsersCount(response.data?.totalCount);
			})
	}

	onPageChanged = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber)
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then((response: ResponseType) => {
				this.props.setUsers(response.data?.items)
			})
	}

	render() {
		return <Users totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			onPageChanged={this.onPageChanged}
			usersData={this.props.usersData}
			unfollow={this.props.unfollow()}
			follow={this.props.follow()}
		/>
	}
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		usersData: state.usersPage.usersData,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
	}
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
	return {
		follow: (userID: string) => { dispatch(followAC(userID)) },
		unfollow: (userID: string) => { dispatch(unfollowAC(userID)) },
		setUsers: (usersData: UsersDataType[]) => { dispatch(usersDataAC(usersData)) },
		setCurrentPage: (currentPage: number) => { dispatch(setCurrentPageAC(currentPage)) },
		setTotalUsersCount: (totalCount: number) => { dispatch(setTotalUsersCountAC(totalCount)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
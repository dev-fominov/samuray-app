import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, toggleIsFetching, unfollow, setUsers, UsersDataType } from "../../../redux/users-reducer";
import { AppStateType } from "../../../redux/redux-store";
import Users from "./Users";
import Preloader from "../../command/Preloader";
import axios from 'axios'

type ResponseType = {
	data: DataType
}

type DataType = {
	items: UsersDataType[]
	totalCount: number
}

type mapStateToPropsType = {
	usersData: UsersDataType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
}

type mapDispatchToPropsType = {
	follow: (userID: string) => void
	unfollow: (userID: string) => void
	setUsers: (usersData: UsersDataType[]) => void
	setCurrentPage: (currentPage: number) => void
	toggleIsFetching: (isFetching: boolean) => void

	setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersPropsType, AppStateType> {

	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then((response: ResponseType) => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			})
	}

	onPageChanged = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then((response: ResponseType) => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data?.items)
			})
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			{console.log(this.props)}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				usersData={this.props.usersData}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				isFetching={this.props.isFetching}
			/>
		</>
	}
}
 
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		usersData: state.usersPage.usersData,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersAPIComponent);
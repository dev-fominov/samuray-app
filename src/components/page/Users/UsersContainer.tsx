import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, toggleIsFetching, unfollow, setUsers, UsersDataType } from "../../../redux/users-reducer";
import { AppStateType } from "../../../redux/redux-store";
import Users from "./Users";
import Preloader from "../../command/Preloader";
import { getUsers } from "../../../api/api";

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
		getUsers(this.props.currentPage, this.props.pageSize).then((data: DataType) => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items);
				this.props.setTotalUsersCount(data.totalCount);
			})
	}

	onPageChanged = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)
			getUsers(pageNumber, this.props.pageSize).then((data: DataType) => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items)
			})
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
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
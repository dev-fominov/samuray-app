import React from "react";
import { connect } from "react-redux";
import { followTC, setCurrentPage, unfollowTC, UsersDataType, toggleFollowingProgress, getUsersTC } from "../../../reducer/users-reducer";
import { AppStateType, RootState } from "../../../reducer/store";
import Users from "./Users";
import Preloader from "../../command/Preloader";
// import { getUsers } from "../../../api/api";

type mapStateToPropsType = {
	usersData: UsersDataType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: number[]
}

type mapDispatchToPropsType = {
	followTC: (userId: number) => void
	unfollowTC: (userId: number) => void
	setCurrentPage: (currentPage: number) => void
	toggleFollowingProgress: (isFetching: boolean, userId: number) => void

	// thunk
	getUsersTC: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersPropsType, RootState> {

	componentDidMount() {
		this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (pageNumber: number) => {
		this.props.getUsersTC(pageNumber, this.props.pageSize)
		this.props.setCurrentPage(pageNumber)
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
				unfollowTC={this.props.unfollowTC}
				followTC={this.props.followTC}
				isFetching={this.props.isFetching}
				followingInProgress={this.props.followingInProgress}
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
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}

export default connect(mapStateToProps,
	{ getUsersTC, followTC, unfollowTC, setCurrentPage, toggleFollowingProgress })(UsersAPIComponent);
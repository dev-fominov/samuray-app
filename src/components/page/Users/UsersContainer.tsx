import { connect } from "react-redux";
import { Dispatch } from "redux";
import { followAC, initialStateType, setCurrentPageAC, setTotalUsersCountAC, unfollowAC, usersDataAC, UsersDataType } from "../../../redux/users-reducer";
import { AppStateType } from "../../../redux/redux-store";
import Users from "./UsersС";


type mapStateToPropsType = initialStateType

type mapDispatchToPropsType = {
	follow: (userID: string) => void
	unfollow: (userID: string) => void
	setUsers: (usersData: UsersDataType[]) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

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

export default connect(mapStateToProps, mapDispatchToProps)(Users);
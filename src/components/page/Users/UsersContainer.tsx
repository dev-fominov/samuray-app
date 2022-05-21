import { connect } from "react-redux";
import { Dispatch } from "redux";
import { followAC, initialStateType, unfollowAC, usersDataAC, UsersDataType } from "../../../redux/users-reducer";
import { AppStateType } from "../../../redux/redux-store";
import Users from "./Users";

type mapStateToPropsType = {
	usersPage: initialStateType
}

type mapDispatchToPropsType = {
	follow: (userID: string) => void
	unfollow: (userID: string) => void
	setUsers: (usersData: UsersDataType[]) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		usersPage: state.usersPage
	}
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
	return {
		follow: (userID: string)=> { dispatch(followAC(userID)) },
		unfollow: (userID: string)=> { dispatch(unfollowAC(userID)) },
		setUsers: (usersData: UsersDataType[])=> { dispatch(usersDataAC(usersData)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
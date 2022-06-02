import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import Profile from "./Profile";
import setUserProfile from './../../../redux/profile-reducer';
const axios = require('axios').default;

type ResponseType = {
	data: ProfileType
}

class ProfileContainer extends React.Component<any, AppStateType> {

	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then((response: ResponseType) => {
				this.props.setUserProfile(response.data);
			})
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}

export type ProfileType = {
	aboutMe: string
	contacts: ContactsType
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	userId: number
	photos: PhotosType
}

export type ContactsType = {
	facebook: string
	website: string | null
	vk: string
	twitter: string
	instagram: string
	youtube: string | null
	github: string
	mainLink: string | null
}

export type PhotosType = {
	small: string
	large: string
}

export type mapStateToPropsType = {
	profile: ProfileType
}

export type mapDispatchToPropsType = {
	setUserProfile: (profile: ProfileType) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		profile: state.profilePage.profile
	}
}

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../../reducer/store";
import Profile from "./Profile";
import { setUserProfile } from '../../../reducer/profile-reducer';
import axios from 'axios'
import { RouteComponentProps, withRouter } from "react-router-dom";


type ResponseType = {
	data: ProfileType
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
	profile: ProfileType | null
}

export type mapDispatchToPropsType = {
	setUserProfile: (profile: ProfileType) => void
}

type PathParamsType = {
	userId: string
}

export type OldProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

type ProfilePropsType = RouteComponentProps<PathParamsType> & OldProfilePropsType

class ProfileContainer extends React.Component<ProfilePropsType, AppStateType> {

	componentDidMount() {
		let userId = this.props.match.params.userId
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		profile: state.profilePage.profile
	}
}

let WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithRouterProfileContainer);
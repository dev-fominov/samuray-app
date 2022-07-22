import React, { ComponentType } from "react";
import { connect } from "react-redux"
import { AppStateType } from "../../../reducer/store"
import Profile from "./Profile"
import { getProfileTC, getStatusTC } from '../../../reducer/profile-reducer'
import { useParams } from "react-router-dom"
import { ProfileType } from "../../../api/api"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect"
import { compose } from "redux";

const withRouter = (WrappedComponent: ComponentType) => (props: any) => {
	const params = useParams()
	return (
		<WrappedComponent
			{...props}
			params={params}
		/>
	)
}

class ProfileContainer extends React.Component<ProfilePropsType, AppStateType> {

	componentDidMount() {
		let userId = this.props.params['*'] ? this.props.params['*'] : '24113'
		this.props.getProfileTC(userId)
		this.props.getStatusTC(userId)
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType =>
	({ profile: state.profilePage.profile })

export default compose<ComponentType>(
	connect(mapStateToProps, { getProfileTC, getStatusTC }),
	withRouter,
	withAuthRedirect
)(ProfileContainer)


// TYPES
export type mapStateToPropsType = {
	profile: ProfileType | null
}

export type mapDispatchToPropsType = {
	getProfileTC: (userId: string) => void
	getStatusTC: (userId: string) => void
}

export type OldProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

type ProfilePropsType = any
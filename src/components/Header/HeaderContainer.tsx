import axios from "axios";
import { connect } from "react-redux";
import React from "react";
import { AppStateType } from "../../redux/redux-store";
import { setAuthUserData } from './../../redux/auth-reducer';
import Header from "./Header";

type ResponseType = {
	data: authType

}

type authType = {
	data: dataType
	resultCode: number
}

type dataType = {
	id: number
	email: string
	login: string
}

class HeaderContainer extends React.Component<HeaderContainerType, AppStateType> {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		})
			.then((response: ResponseType) => {
				if (response.data.resultCode === 0) {
					let { id, email, login } = response.data.data
					this.props.setAuthUserData(id, email, login);
				}

			})
	}

	render() {
		return <Header
			{...this.props}
			isAuth={this.props.isAuth}
			login={this.props.login}
		/>
	}
}
type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
	isAuth: boolean
	login: string
}
export type mapDispatchToPropsType = {
	setAuthUserData: (userId:number | null, email:string | null, login:string | null) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
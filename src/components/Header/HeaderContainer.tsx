import { connect } from "react-redux"
import React from "react"
import { AppStateType } from "../../reducer/store"
import { getAuthTC } from '../../reducer/auth-reducer'
import Header from "./Header"

class HeaderContainer extends React.Component<HeaderContainerType, AppStateType> {

	componentDidMount() {
		this.props.getAuthTC()
	}

	render() {
		return <Header
			{...this.props}
			isAuth={this.props.isAuth}
			login={this.props.login}
		/>
	}
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})

export default connect(mapStateToProps, { getAuthTC })(HeaderContainer)

type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
	isAuth: boolean
	login: string
}
export type mapDispatchToPropsType = {
	getAuthTC: () => void
}
import { connect } from 'react-redux';
import { ComponentType } from "react"
import { Navigate } from "react-router-dom";
import { AppStateType } from '../reducer/store';

type mapStateToPropsForRedirectType = {
	isAuth: boolean
}
const mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsForRedirectType => ({
	isAuth: state.auth.isAuth
})

export function withAuthRedirect(Component: ComponentType) {
	const RedirectComponent = (props: mapStateToPropsForRedirectType) => {

		let { isAuth, ...restProps } = props
		if (!isAuth) return <Navigate replace to="/login" />

		return <Component {...restProps} />
	}

	let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

	return ConnectedAuthRedirectComponent
}
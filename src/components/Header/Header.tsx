import React from "react";
import { NavLink } from "react-router-dom"
import s from './Header.module.scss'

type HeaderType = {
	isAuth: boolean
	login: string
}

function Header(props: HeaderType) {
	return (
		<header className={s.header} >
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaKmCAAbxT1jG-BqJzn8MKOO6u4pfsVJuZFg&usqp=CAU" alt="Logo" />
			<div className={s.loginBlock}>
				{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

			</div>
		</header>
	)
}

export default Header;
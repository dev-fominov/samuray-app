import React from 'react';
import { NavLink } from 'react-router-dom';
import Dialogs from '../page/Dialogs/Dialogs';
import Profile from '../page/Profile/Profile';
import s from './Navbar.module.scss'

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<li>
					<NavLink to="/dialogs" activeClassName={s.active} >Dialogs</NavLink>
				</li>
				<li>
					<NavLink to="/profile" activeClassName={s.active} >Profile</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;
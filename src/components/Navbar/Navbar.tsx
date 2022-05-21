import React from 'react';
import { NavLink } from 'react-router-dom';
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
				<li>
					<NavLink to="/users" activeClassName={s.active} >Users</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;
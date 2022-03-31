import React from 'react';
import s from './Navbar.module.scss'

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<li><a href="#1">Menu 1</a></li>
				<li><a href="#2">Menu 2</a></li>
				<li><a href="#3">Menu 3</a></li>
				<li><a href="#4">Menu 4</a></li>
			</ul>
		</nav>
	)
}

export default Navbar;
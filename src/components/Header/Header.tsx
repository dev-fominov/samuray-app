import React from "react";
import s from './Header.module.scss';

function Header() {
	return (
		<header className={s.header} >
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaKmCAAbxT1jG-BqJzn8MKOO6u4pfsVJuZFg&usqp=CAU" alt="Logo" />
		</header>
	)
}

export default Header;
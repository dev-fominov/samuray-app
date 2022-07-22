import { NavLink } from 'react-router-dom'
import s from './Navbar.module.scss'

type isActiveType = {
	isActive: boolean
}

export const Navbar = () => {

	const itemActive = ({ isActive }: isActiveType): string => isActive ? `${s.active}` : ''

	return (
		<nav className={s.nav}>
			<ul>
				<li>
					<NavLink to="/dialogs" className={itemActive} >Dialogs</NavLink>
				</li>
				<li>
					<NavLink to="/profile" className={itemActive} >Profile</NavLink>
				</li>
				<li>
					<NavLink to="/users" className={itemActive} >Users</NavLink>
				</li>
			</ul>
		</nav>
	)
}
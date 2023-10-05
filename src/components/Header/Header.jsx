import { NavLink } from 'react-router-dom';
import logo from '../../assets/header/Logo.svg';
import telephone from '../../assets/header/telephone copy.svg';
import cart from '../../assets/header/Cart Copy.svg';
import menuBurger from '../../assets/header/Menu.svg';
import classes from './Header.module.scss';

export const Header = () => {
	return (
		<header className={classes.header}>
			<NavLink to="/">
				<img src={logo} alt="logo" className={classes.logo} />
			</NavLink>
			<div className={classes.buttonsNavBlock}>
				<NavLink to="/">
					<img src={telephone} alt="telephone" />
				</NavLink>
				<NavLink to="/">
					<img src={cart} alt="cart" />
				</NavLink>
			</div>
			<NavLink to="/">
				<img src={menuBurger} alt="menuBurger" />
			</NavLink>
		</header>
	);
};

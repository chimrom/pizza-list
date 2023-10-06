import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import Logo from '../../assets/header/logo.svg';
import { Logo } from '../Logo/Logo';
import telephone from '../../assets/header/telephone copy.svg';
import cart from '../../assets/header/Cart Copy.svg';
import menuBurger from '../../assets/header/Menu.svg';
import classes from './Header.module.scss';

export const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<header className={classes.header}>
			<NavLink to="/">
				<Logo />
			</NavLink>
			<div className={classes.buttonsNavBlock}>
				<img src={telephone} alt="telephone" />
				<img src={cart} alt="cart" />
			</div>
			<button onClick={() => setOpen(true)}>
				<img src={menuBurger} alt="menuBurger" />
			</button>
			{open && (
				<div className={classes.divider}>
					<span>
						<div className={classes.topDivider}>
							<Logo />
							<div
								className={classes.close}
								onClick={() => setOpen(false)}
							></div>
						</div>
						<ul className={classes.navList}>
							<li>Меню</li>
							<li>О нас</li>
							<li>Контакты</li>
						</ul>
					</span>
					<div className={classes.bottomDivider}>
						<p>Заказать по телефону</p>
						<p>+7 (918) 432-65-87</p>
						<p>Ежедневно с 9:00 до 23:00</p>
						<p>English</p>
					</div>
				</div>
			)}
		</header>
	);
};

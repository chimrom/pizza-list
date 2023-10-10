import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';
import telephone from '../../assets/header/telephone copy.svg';
import cart from '../../assets/header/Cart Copy.svg';
import basketStore from '../../store/basketStore';
import menuBurger from '../../assets/header/Menu.svg';
import { useResize } from '../../hooks/useResize';
import { NavMenu } from '../NavMenu/NavMenu';
import { Logo } from '../Logo/Logo';
import { HeaderButton } from '../HeaderButton/HeaderButton';
import { getPizzaByCount } from '../../utils/getTextByCount';
import { navMenu } from '../../utils/navMenu';
import Modal from '../Modal/Modal';

import classes from './Header.module.scss';

export const Header = observer(() => {
	const { pizzaBasket } = basketStore;
	const { isScreenSm, isScreenLg } = useResize();
	const [open, setOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const getString = () => {
		let string = '';
		if (pizzaBasket.length === 1) {
			string = pizzaBasket[0]?.name;
		} else if (pizzaBasket.length > 1) {
			let currentNumber = pizzaBasket.length - 1;
			string =
				pizzaBasket[0]?.name + ' и еще ' + getPizzaByCount(currentNumber);
		}

		return string;
	};

	return (
		<>
			<Modal open={openModal} onClose={() => setOpenModal(false)} />
			<header className={classes.header}>
				<NavLink to="/">
					<Logo />
				</NavLink>
				{isScreenLg && <NavMenu />}

				<span className={classes.headerRight}>
					<div className={classes.buttonsNavBlock}>
						<HeaderButton
							img={telephone}
							title="+7 (918) 432-65-87"
							text="Ежедневно с 9:00 до 23:00"
						/>
						<HeaderButton
							img={cart}
							title="Ваш заказ"
							text={getString()}
							onClick={() => setOpenModal(true)}
							number={pizzaBasket.length}
						/>
					</div>
					{isScreenSm && <span className={classes.language}>EN</span>}
					{!isScreenLg && (
						<>
							<button onClick={() => setOpen(true)}>
								<img src={menuBurger} alt="menuBurger" />
							</button>
							{open && (
								<div className={classes.divider}>
									<span>
										<div className={classes.topDivider}>
											{isScreenSm ? null : <Logo />}

											<div
												className={classes.close}
												onClick={() => setOpen(false)}
											></div>
										</div>
										<ul className={classes.navList}>
											{navMenu.map((el) => (
												<NavLink
													to={el.path}
													key={el.title}
													className={({ isActive }) =>
														isActive
															? `${classes.menuItem} ${classes.active}`
															: `${classes.menuItem} `
													}
												>
													{el.title}
												</NavLink>
											))}
										</ul>
									</span>
									<div className={classes.bottomDivider}>
										<span>
											<p className={classes.title}>Заказать по телефону</p>
											<h2>+7 (918) 432-65-87</h2>
											<p className={classes.time}>Ежедневно с 9:00 до 23:00</p>
										</span>
										{isScreenSm ? null : (
											<p className={classes.english}>English</p>
										)}
									</div>
								</div>
							)}
						</>
					)}
				</span>
			</header>
		</>
	);
});

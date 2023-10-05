import { NavLink } from 'react-router-dom';
import { footerImgList } from '../../utils/footerImgList';
import logo from '../../assets/header/Logo.svg';

import classes from './Footer.module.scss';

export const Footer = () => {
	return (
		<footer>
			<h2>Следите за нами в Instagram</h2>
			<h4>@pizzamenu</h4>
			<section className={classes.imgList}>
				{footerImgList.map((el) => (
					<img src={el.img} alt={el.id + 'картинка'} key={el.id} />
				))}
			</section>
			<section className={classes.bottomFooter}>
				<NavLink to="/">
					<img src={logo} alt="logo" className={classes.logo} />
				</NavLink>
				<h3>+7 (918) 432-65-87</h3>
				<p>Ежедневно с 9:00 до 23:00</p>
				<p>Политика конфиденциальности</p>
			</section>
		</footer>
	);
};

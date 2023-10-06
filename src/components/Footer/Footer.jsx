import { NavLink } from 'react-router-dom';
import { footerImgList } from '../../utils/footerImgList';
import { Logo } from '../Logo/Logo';
import { useResize } from '../../hooks/useResize';

import classes from './Footer.module.scss';

export const Footer = () => {
	const { isScreenMd, isScreenLg } = useResize();
	const numberAtWindow = () => {
		let res = 4;
		if (isScreenMd) {
			res = 6;
		} else if (isScreenLg) {
			res = 12;
		}
		return res;
	};
	const currentNumber = numberAtWindow();
	return (
		<footer>
			<h2>Следите за нами в Instagram</h2>
			<h4>@pizzamenu</h4>
			<section className={classes.imgList}>
				{footerImgList.slice(0, currentNumber).map((el) => (
					<img src={el.img} alt={el.id + 'картинка'} key={el.id} />
				))}
			</section>
			<section className={classes.bottomFooter}>
				<NavLink to="/">
					<Logo />
				</NavLink>
				<h3>+7 (918) 432-65-87</h3>
				<p>Ежедневно с 9:00 до 23:00</p>
				<p>Политика конфиденциальности</p>
			</section>
		</footer>
	);
};

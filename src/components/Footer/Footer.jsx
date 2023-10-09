import { NavLink } from 'react-router-dom';
import { footerImgList } from '../../utils/footerImgList';
import { useResize } from '../../hooks/useResize';
import { Logo } from '../Logo/Logo';

import classes from './Footer.module.scss';

export const Footer = () => {
	const { isScreenMd, isScreenSm, isScreenLg } = useResize();
	const numberAtWindow = () => {
		let res = 4;
		if (isScreenSm) {
			res = 6;
		}
		if (isScreenMd) {
			res = 8;
		}
		if (isScreenLg) {
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
				<div>
					<NavLink to="/">
						<Logo />
					</NavLink>
					<span>
						<h3>+7 (918) 432-65-87</h3>
						<p>Ежедневно с 9:00 до 23:00</p>
					</span>
				</div>
				<p>Политика конфиденциальности</p>
			</section>
		</footer>
	);
};

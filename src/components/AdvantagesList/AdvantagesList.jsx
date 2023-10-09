import img1 from '../../assets/advantages/advantages1.png';
import img2 from '../../assets/advantages/advantages2.png';
import img3 from '../../assets/advantages/advantages3.png';

import classes from './AdvantagesList.module.scss';

export const AdvantagesList = () => {
	return (
		<section className={classes.wrapper}>
			<div className={classes.card}>
				<span className={classes.imgWrapper}>
					<img src={img1} alt="рецепты" />
				</span>
				<div className={classes.cardInfo}>
					<h3>Изготавливаем пиццу по своим рецептам в лучших традициях</h3>
					<p>
						Наша пицца получается сочной, вкусной и главное хрустящей с нежной и
						аппетитной начинкой, готовим по своим итальянским рецептам
					</p>
				</div>
			</div>
			<div className={classes.card}>
				<span className={classes.imgWrapper}>
					<img src={img2} alt="ингридиенты" />
				</span>
				<div className={classes.cardInfo}>
					<h3>Используем только свежие ингридиенты</h3>
					<p>
						Ежедневно заготавливаем продукты и овощи для наших пицц, соблюдаем
						все сроки хранения
					</p>
				</div>
			</div>
			<div className={classes.card}>
				<span className={classes.imgWrapper}>
					<img src={img3} alt="доставка" />
				</span>
				<div className={classes.cardInfo}>
					<h3>Доставка в течение 60 минут или заказ за нас счёт</h3>
					<p>
						Все наши курьеры – фанаты серии Need for Speed и призеры гонок World
						Rally Championship и World Superbike во всех категориях
					</p>
				</div>
			</div>
		</section>
	);
};

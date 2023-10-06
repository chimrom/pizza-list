import { useState } from 'react';
import { groupPizza } from '../../../utils/groupPizza';
import classes from './PizzaCard.module.scss';

export const PizzaCard = ({ name, composition, price, type, img }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const currentGroups = groupPizza.filter((el) => type.includes(el.type));
	const currentPrice = price[currentIndex];
	return (
		<div className={classes.wrapper}>
			<span className={classes.imgsWrapper}>
				<img src={img} alt={name} className={classes.pizzaImg} />
				<span className={classes.groupsList}>
					{currentGroups.map((el) => (
						<img src={el.img} alt={el.title} />
					))}
				</span>
			</span>
			<div>
				<h3>{name}</h3>
				<p>{composition}</p>
				<div>
					<p>размер, см:</p>
					<div className={classes.buttonGroup}>
						<button className={`${classes.activeButton} ${classes.button}`}>
							20
						</button>
						<button className={classes.button}>30</button>
						<button className={classes.button}>40</button>
					</div>
				</div>
				<button className={classes.payButton}>от {currentPrice} руб.</button>
			</div>
		</div>
	);
};

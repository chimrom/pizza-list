import { useEffect } from 'react';
import { PizzaItem } from '../PizzaItem/PizzaItem';
import { observer } from 'mobx-react';
import basketStore from '../../../store/basketStore';

import classes from './PizzaListBasket.module.scss';

export const PizzaListBasket = observer(({ pizza }) => {
	const { totalPrice, getTotalPrice } = basketStore;
	// let totalPrice = pizza.reduce(
	// 	(total, item) => total + item.price * item.amount,
	// 	0
	// );
	useEffect(() => {
		getTotalPrice();
	}, []);
	if (!pizza.length) {
		return (
			<div className={classes.notFound}>
				<h2>Корзина пуста</h2>
				<h4>Выберите пиццу!</h4>
			</div>
		);
	}
	return (
		<div className={classes.wrapper}>
			{pizza.map((el, index) => (
				<PizzaItem
					img={el.img}
					name={el.name}
					currentIndex={el.currentIndex}
					price={el.price}
					key={index}
					currAmount={el.amount}
					type={el.type}
					id={el.id}
				/>
			))}
			<h2>Сумма заказа: {totalPrice.toLocaleString('ru-Ru')} руб</h2>
		</div>
	);
});

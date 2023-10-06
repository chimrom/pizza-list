import { useState } from 'react';
import { pizzaList } from '../../../utils/pizzaList';
import { groupPizza } from '../../../utils/groupPizza';
import { PizzaCard } from '../PizzaCard/PizzaCard';

import classes from './PizzaList.module.scss';

export const PizzaList = () => {
	const [currentType, setCurrentType] = useState(0);
	const currentPizzaList =
		currentType === 0
			? pizzaList
			: pizzaList.filter((el) => el.type.includes(currentType));

	return (
		<section className={classes.wrapper}>
			<h2>Выберите пиццу</h2>
			{groupPizza.map((el, index) => (
				<img
					src={el.img}
					key={el.title}
					onClick={() => setCurrentType(el.type)}
					// style={{ color: currentType === index ? '#E52D2D' : '#C5CBD1' }}
				/>
			))}
			<div className={classes.pizzaList}>
				{currentPizzaList.map((el) => (
					<PizzaCard
						name={el.name}
						composition={el.composition}
						price={el.price}
						img={el.img}
						type={el.type}
						key={el.name}
					/>
				))}
			</div>
		</section>
	);
};

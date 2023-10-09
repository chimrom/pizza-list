import { useState } from 'react';
import { pizzaList } from '../../../utils/pizzaList';
import { groupPizza } from '../../../utils/groupPizza';
import { PizzaCard } from '../PizzaCard/PizzaCard';
import { SvgImg } from '../../SvgImg/SvgImg';

import classes from './PizzaList.module.scss';

export const PizzaList = () => {
	const [currentType, setCurrentType] = useState(0);
	const currentPizzaList =
		currentType === 0
			? pizzaList
			: pizzaList.filter((el) => el.type.includes(currentType));

	const handleClick = (type) => {
		setCurrentType(type);
	};

	return (
		<section className={classes.wrapper}>
			<a name="pizza"></a>
			<h2>Выберите пиццу</h2>
			<span className={classes.filterList}>
				{groupPizza.map((el, index) => (
					<SvgImg
						title={el.title}
						key={index}
						onClick={handleClick}
						isActive={currentType === index ? true : false}
						type={el.type}
					/>
				))}
			</span>
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

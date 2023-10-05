import { useState } from 'react';
import classes from './PizzaCard.module.scss';

export const PizzaCard = ({ name, composition, price, img }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const currentPrice = price[currentIndex];
	return (
		<div className={classes.wrapper}>
			<img src={img} alt={name} />
			<div>
				<h3>{name}</h3>
				<p>{composition}</p>
				<div>
					<p>размер, см:</p>
					<div>
						<button>20</button>
						<button>30</button>
						<button>40</button>
					</div>
				</div>
				<button>от {currentPrice} руб.</button>
			</div>
		</div>
	);
};

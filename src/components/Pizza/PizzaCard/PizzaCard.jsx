import { useState } from 'react';
import { observer } from 'mobx-react';
import { groupPizza } from '../../../utils/groupPizza';
import { useResize } from '../../../hooks/useResize';
import basketStore from '../../../store/basketStore';
import { SizePizza } from './SizePizza';

import classes from './PizzaCard.module.scss';

const buttons = [{ value: 20 }, { value: 30 }, { value: 40 }];

export const PizzaCard = observer(({ name, composition, price, type, img }) => {
	const { addItem, pizzaBasket, increment } = basketStore;

	const { isScreenSm } = useResize();
	const [currentIndex, setCurrentIndex] = useState(0);
	const currentGroups = groupPizza.filter((el) => type.includes(el.type));
	const currentPrice = price[currentIndex];

	let scaleImg = '';
	if (currentIndex === 0) {
		scaleImg = classes.imgSm;
	} else if (currentIndex === 1) {
		scaleImg = classes.imgMd;
	} else {
		scaleImg = '';
	}

	const findPizza = () => {
		let check = false;
		const res = pizzaBasket.find(
			(el) => el.name === name && el.currentIndex === currentIndex
		);
		if (res) {
			check = true;
		}
		return { check, res };
	};

	let { check } = findPizza();

	const handleAddToBasket = () => {
		addItem({
			name,
			price: currentPrice,
			type,
			img,
			currentIndex,
			amount: 1,
			id: Date.now(),
		});
	};

	const handleAddAmount = () => {
		let { res } = findPizza();
		increment(res.id);
	};
	return (
		<div className={classes.wrapper}>
			<span className={classes.groupsList}>
				{currentGroups.map((el, index) => (
					<img src={el.img} alt={el.title} key={index} />
				))}
			</span>
			<span className={classes.imgsWrapper}>
				<SizePizza />
				<img
					src={img}
					alt={name}
					className={`${classes.pizzaImg} ${scaleImg}`}
				/>
			</span>
			<div className={classes.pizzaInfo}>
				<h3 className={classes.name}>{name}</h3>
				<p>{composition}</p>
				<div className={classes.cardActive}>
					<p>Размер, см:</p>
					<div className={classes.buttonGroup}>
						{buttons.map((el, index) => (
							<button
								className={
									index === currentIndex
										? `${classes.activeButton} ${classes.button}`
										: `${classes.button}`
								}
								key={el.value}
								onClick={() => setCurrentIndex(index)}
							>
								{el.value}
							</button>
						))}
					</div>
				</div>
				{isScreenSm ? (
					<>
						<h3 className={classes.price}>от {currentPrice} руб.</h3>
						{check ? (
							<>
								<button className={classes.payButton} onClick={handleAddAmount}>
									Добавить
								</button>
							</>
						) : (
							<>
								<button
									className={classes.payButton}
									onClick={handleAddToBasket}
								>
									Заказать
								</button>
							</>
						)}
						{/* <button className={classes.payButton} onClick={handleAddToBasket}>
							Заказать
						</button> */}
					</>
				) : (
					<button className={classes.payButton} onClick={handleAddToBasket}>
						от {currentPrice} руб
					</button>
				)}
			</div>
		</div>
	);
});

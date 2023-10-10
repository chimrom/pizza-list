import { useState } from 'react';
import { observer } from 'mobx-react';
import basketStore from '../../../store/basketStore';
import { SizePizza } from '../../Pizza/PizzaCard/SizePizza';
import { groupPizza } from '../../../utils/groupPizza';
import classes from './PizzaItem.module.scss';

const size = [{ value: 20 }, { value: 30 }, { value: 40 }];

export const PizzaItem = observer(
	({ img, name, currentIndex, price, currAmount, type, id }) => {
		const [amount, setAmount] = useState(currAmount || 0);
		const { increment, decrement, getTotalPrice } = basketStore;
		const currentGroups = groupPizza.filter((el) => type.includes(el.type));
		let scaleImg = '';
		if (currentIndex === 0) {
			scaleImg = classes.imgSm;
		} else if (currentIndex === 1) {
			scaleImg = classes.imgMd;
		} else {
			scaleImg = '';
		}

		const increase = () => {
			setAmount((prev) => prev + 1);
			increment(id);
			getTotalPrice();
		};
		const decrease = () => {
			if (amount === 1) return;
			setAmount((prev) => prev - 1);
			decrement(id);
			getTotalPrice();
		};

		return (
			<div className={classes.wrapper}>
				<div className={classes.itemLeft}>
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
					<span className={classes.name}>
						<h3>{name}</h3>
						<p>{size[currentIndex].value} см</p>
					</span>
				</div>
				<div className={classes.itemRight}>
					<span className={classes.amountBlock}>
						<button onClick={decrease} disabled={amount === 1 ? true : false}>
							-
						</button>
						<input type="number" value={amount} min={1} />
						<button onClick={increase}>+</button>
					</span>
					<h3>{(price * amount).toLocaleString('ru-Ru')} руб</h3>
				</div>
			</div>
		);
	}
);

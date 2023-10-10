import { useState } from 'react';
import { observer } from 'mobx-react';
import basketStore from '../../store/basketStore';
import { PizzaListBasket } from './PizzaListBasket/PizzaListBasket';

import classes from './FormModal.module.scss';

export const FormModal = observer(() => {
	const [payment, setPayment] = useState('option1');
	const onOptionChange = (event) => {
		setPayment(event.target.value);
	};
	const { pizzaBasket } = basketStore;

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<form className={classes.from} onSubmit={handleSubmit}>
			<PizzaListBasket pizza={pizzaBasket} />
			<h3>Контакты</h3>
			<span className={classes.inputBlock}>
				<input placeholder="Ваше имя" />
				<input placeholder="Телефон" />
				<input className={classes.bigInput} placeholder="Адрес доставки" />
			</span>
			<h3>Способ оплаты</h3>
			<div className={classes.radioBlock}>
				<div>
					<input
						type="radio"
						value="option1"
						id="option1"
						checked={payment === 'option1'}
						onChange={onOptionChange}
					/>

					<label htmlFor="option1">Оплата наличными или картой курьеру</label>
				</div>
				<div>
					<input
						type="radio"
						value="option2"
						id="option2"
						checked={payment === 'option2'}
						onChange={onOptionChange}
					/>

					<label htmlFor="option2">Оплата картой онлайн на сайте</label>
				</div>
			</div>
			<button className={classes.submitButton} type="submit">
				Оформить заказ
			</button>
			<small>
				Нажимая кнопку «Оформить заказ» вы соглашаетесь с политикой
				конфиденциальности
			</small>
		</form>
	);
});

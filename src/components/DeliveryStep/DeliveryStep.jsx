import orderImg from '../../assets/delivery/icon-order.jpg';
import deliveryImg from '../../assets/delivery/icon-delivery.jpg';
import payImg from '../../assets/delivery/icon-pay.jpg';

import classes from './DeliveryStep.module.scss';

export const DeliveryStep = () => {
	return (
		<div className={classes.wrapper}>
			<h2>Доставка и оплата</h2>
			<div className={classes.card}>
				<img src={orderImg} alt="order" />
				<span>
					<h3>Заказ</h3>
					<p>
						После оформления заказа мы свяжемся с вами для уточнения деталей.
					</p>
				</span>
			</div>
			<div className={classes.card}>
				<img src={deliveryImg} alt="delivery" />
				<span>
					<h3>Доставка курьером</h3>
					<p>Мы доставим вашу пиццу горячей. Бесплатная доставка по городу.</p>
				</span>
			</div>
			<div className={classes.card}>
				<img src={payImg} alt="pay" />
				<span>
					<h3>Оплата</h3>
					<p>
						Оплатить можно наличными или картой курьеру. И золотом тоже можно.
					</p>
				</span>
			</div>
		</div>
	);
};

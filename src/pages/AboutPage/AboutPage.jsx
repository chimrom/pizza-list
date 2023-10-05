import heroImg from '../../assets/Group 6 (1).jpg';
import { EventSlider } from '../../components/Events/EventSlider/EventSlider';
import { PizzaList } from '../../components/Pizza/PizzaList/PizzaList';
import { DeliveryStep } from '../../components/DeliveryStep/DeliveryStep';
import { AdvantagesList } from '../../components/AdvantagesList/AdvantagesList';
import classes from './AboutPage.module.scss';

export const AboutPage = () => {
	return (
		<main className={classes.wrapper}>
			<div>
				<img src={heroImg} alt="hero" className={classes.heroImg} />
			</div>
			<div>
				<h1>Пицца на заказ</h1>
				<p>
					Бесплатная и быстрая доставка за час в любое удобное для вас время
				</p>
				<button>Выбрать пиццу</button>
			</div>
			<EventSlider />
			<PizzaList />
			<DeliveryStep />
			<AdvantagesList />
		</main>
	);
};

import heroImg from '../../assets/Group 6 (1).jpg';
import { EventSlider } from '../../components/Events/EventSlider/EventSlider';
import { EventList } from '../../components/Events/EventList/EventList';
import { PizzaList } from '../../components/Pizza/PizzaList/PizzaList';
import { DeliveryStep } from '../../components/DeliveryStep/DeliveryStep';
import { AdvantagesList } from '../../components/AdvantagesList/AdvantagesList';
import { useResize } from '../../hooks/useResize';

import classes from './AboutPage.module.scss';

export const AboutPage = () => {
	const { isScreenSm } = useResize();
	return (
		<main className={classes.wrapper}>
			<section className={classes.section}>
				<div>
					<img src={heroImg} alt="hero" className={classes.heroImg} />
				</div>
				<div className={classes.title}>
					<h1>Пицца на заказ</h1>
					<p>
						Бесплатная и быстрая доставка за час в любое удобное для вас время
					</p>
					<a href="#pizza" className={classes.mainButton}>
						Выбрать пиццу
					</a>
				</div>
			</section>
			{isScreenSm ? <EventList /> : <EventSlider />}

			<PizzaList />
			<DeliveryStep />
			<AdvantagesList />
		</main>
	);
};

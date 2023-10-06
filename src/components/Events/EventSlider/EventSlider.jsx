import { useState } from 'react';
import { eventList } from '../../../utils/eventList';
import { EventCard } from '../EventCard/EventCard';
import { Oval } from './Oval';

import classes from './EventSlider.module.scss';

export const EventSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const { title, img, description } = eventList[currentIndex];
	return (
		<>
			<EventCard title={title} img={img} description={description} />
			<ul className={classes.ovalList}>
				{[...Array(eventList.length).keys()].map((el, index) => (
					<li
						key={el}
						className={index === currentIndex ? `${classes.current}` : ''}
						onClick={() => setCurrentIndex(index)}
					>
						<Oval />
					</li>
				))}
			</ul>
		</>
	);
};

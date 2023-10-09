import { useState } from 'react';
import { eventList } from '../../../utils/eventList';
import { EventCard } from '../EventCard/EventCard';

import classes from './EventList.module.scss';

export const EventList = () => {
	const [events, setEvents] = useState(eventList);

	return (
		<section className={classes.wrapper}>
			{events.map((el) => (
				<EventCard title={el.title} img={el.img} description={el.description} />
			))}
		</section>
	);
};

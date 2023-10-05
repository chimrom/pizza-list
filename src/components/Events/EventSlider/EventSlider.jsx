import { useState } from 'react';
import { EventCard } from '../EventCard/EventCard';
import { eventList } from '../../../utils/eventList';

export const EventSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const { title, img, description } = eventList[currentIndex];
	return (
		<>
			<EventCard title={title} img={img} description={description} />
			<div></div>
		</>
	);
};

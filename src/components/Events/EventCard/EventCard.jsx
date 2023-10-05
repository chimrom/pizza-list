import classes from './EventCard.module.scss';

export const EventCard = ({ img, title, description }) => {
	return (
		<div className={classes.wrapper}>
			<img src={img} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
};

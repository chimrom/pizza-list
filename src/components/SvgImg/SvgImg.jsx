import { useResize } from '../../hooks/useResize';
import { Cheese } from '../GroupPizza/Cheese';
import { All } from '../GroupPizza/All';
import { Carrot } from '../GroupPizza/Carrot';
import { Chili } from '../GroupPizza/Chili';
import { Meat } from '../GroupPizza/Meat';
import classes from './SvgImg.module.scss';

export const SvgImg = ({ title, onClick, type, isActive }) => {
	const { isScreenSm } = useResize();
	let CurrentImg = '';
	switch (title) {
		case 'все':
			CurrentImg = <All />;
			break;

		case 'острые':
			CurrentImg = <Chili />;
			break;
		case 'мясные':
			CurrentImg = <Meat />;
			break;
		case 'сырные':
			CurrentImg = <Cheese />;
			break;
		case 'вегетарианские':
			CurrentImg = <Carrot />;
			break;

		default:
			CurrentImg = '';
			break;
	}
	return (
		<div className={classes.wrapper} onClick={() => onClick(type)}>
			<span
				className={
					isActive
						? `${classes.select} ${classes.groupWrapper}`
						: `${classes.groupWrapper}`
				}
			>
				{isScreenSm ? (
					<h3 className={classes.title}>
						<span className={classes.imgFilter}>{CurrentImg}</span>
						{title}
					</h3>
				) : (
					CurrentImg
				)}
			</span>
		</div>
	);
};

import { useResize } from '../../hooks/useResize';

import classes from './HeaderButtun.module.scss';

export const HeaderButton = ({ img, title, text, onClick, number }) => {
	const { isScreenLg } = useResize();
	return (
		<button onClick={onClick} className={classes.wrapper}>
			<span>
				<img src={img} alt={title} />
				{!!number && <span className={classes.number}>{number}</span>}
			</span>
			{isScreenLg && (
				<span>
					<h3>{title}</h3>
					<p>{text}</p>
				</span>
			)}
		</button>
	);
};

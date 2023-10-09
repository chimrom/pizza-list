import { NavLink } from 'react-router-dom';
import { navMenu } from '../../utils/navMenu';

import classes from './NavMenu.module.scss';

export const NavMenu = () => {
	return (
		<ul className={classes.ul}>
			{navMenu.map((el) => (
				<NavLink
					to={el.path}
					key={el.title}
					className={({ isActive }) =>
						isActive
							? `${classes.menuItem} ${classes.active}`
							: `${classes.menuItem} `
					}
				>
					{el.title}
				</NavLink>
			))}
		</ul>
	);
};

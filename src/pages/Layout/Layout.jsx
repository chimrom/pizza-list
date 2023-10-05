import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import classes from './Layout.module.scss';

export const Layout = () => {
	return (
		<div className={classes.wrapper}>
			<Header />
			<main className={classes.main}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

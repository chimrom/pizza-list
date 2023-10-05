import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout/Layout';
import { AboutPage } from './pages/AboutPage/AboutPage';
import './App.css';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<AboutPage />} />
			</Route>
		</Routes>
	);
}
export default App;

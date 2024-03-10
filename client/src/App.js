import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = observer(() => {
	const { user } = useContext(Context);
	return (
		<div className="wrapper">
			<Header />
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
			<Footer />
		</div>
	);
});

export default App;

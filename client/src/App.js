import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import './App.scss';

const App = observer(() => {
	const { user } = useContext(Context);
	return (
		<div className="wrapper">
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</div>
	);
});

export default App;

import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { CartStore } from './stores/CartStore';
import { ProductStore } from './stores/ProductStore';
import { UserStore } from './stores/UserStore';
import { addTouchClass } from './utils/functions';
import { BrowserRouter } from 'react-router-dom';

export const Context = createContext(null);

// add 'touch' class to html element if using a mobile
addTouchClass();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Context.Provider
			value={{
				user: new UserStore(),
				products: new ProductStore(),
				cart: new CartStore(),
			}}
		>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Context.Provider>
	</React.StrictMode>
);

import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { UserStore } from './stores/UserStore';
import { ProductStore } from './stores/ProductStore';
import { CartStore } from './stores/CartStore';

export const Context = createContext(null);

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
			<App />
		</Context.Provider>
	</React.StrictMode>
);

import {
	HOME_ROUTE,
	SHOP_ROUTE,
	PRODUCT_ROUTE,
	ACCOUNT_ROUTE,
	CART_ROUTE,
	REGISTRATION_ROUTE,
	LOGIN_ROUTE,
} from './paths.js';
import { Home, Account, Auth, Product, Cart, Shop } from '../pages/pages.js';

export const authRoutes = [
	{
		path: ACCOUNT_ROUTE,
		Component: Account,
	},
];

export const publicRoutes = [
	{
		path: HOME_ROUTE,
		Component: Home,
	},
	{
		path: SHOP_ROUTE,
		Component: Shop,
	},
	{
		path: LOGIN_ROUTE,
		Component: Auth,
	},
	{
		path: REGISTRATION_ROUTE,
		Component: Auth,
	},
	{
		path: PRODUCT_ROUTE + '/:id',
		Component: Product,
	},
	{
		path: CART_ROUTE,
		Component: Cart,
	},
];

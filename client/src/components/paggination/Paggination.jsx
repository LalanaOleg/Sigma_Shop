import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ProductStore } from '../../stores/ProductStore';
import { Context } from '../../index';

const Paggination = observer(() => {
	/**
	 * @type {[IFullProduct, React.Dispatch<IFullProduct>]} state
	 */
	const context = useContext(Context);
	/** @type {ProductStore} */
	const products = context.products;

	const pageCount = Math.ceil(products.totalCount / products.limit)

	return <div>{pageCount}</div>;
});

export default Paggination;

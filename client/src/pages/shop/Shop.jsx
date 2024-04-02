import React, { useContext, useEffect,useState } from 'react';
import Heading from '../../components/heading/Heading.jsx';
import ShopFilters from '../../components/shopFilters/ShopFilter.jsx';
import GridContainer from '../../components/gridContainer/GridContainer.jsx';
import ProductElement from '../../components/productElement/ProductElement.jsx';
import './Shop.scss';
import Features from '../../components/features/Features.jsx';
import { Context } from '../../index.js';
import { observer } from 'mobx-react';
import { ProductsAPI } from '../../http/productsAPI.js';

function Shop() {
	const { products } = useContext(Context);

	useEffect(() => {
		ProductsAPI.fetchProducts(products.page, products.limit).then((data) => {
			products.setProducts(data.content);
			products.setTotalPage(data.totalPages);
			products.setTotalCount(data.totalElements);
		});
	}, []);

	return (
		<main className="shop">
			<Heading title="Shop" />
			<ShopFilters />
			<GridContainer items={products.products} renderItem={ProductElement} />
			<Features />
		</main>
	);
}

export default observer(Shop);

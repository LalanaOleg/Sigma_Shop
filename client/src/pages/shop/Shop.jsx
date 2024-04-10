import React, { useContext, useEffect } from 'react';
import Heading from '../../components/heading/Heading.jsx';
import ShopFilters from '../../components/shopFilters/ShopFilter.jsx';
import GridContainer from '../../components/gridContainer/GridContainer.jsx';
import ProductElement from '../../components/productElement/ProductElement.jsx';
import './Shop.scss';
import Features from '../../components/features/Features.jsx';
import { Context } from '../../index.js';
import { observer } from 'mobx-react';
import { ProductsAPI } from '../../http/productsAPI.js';
import Pagination from '../../components/pagination/Pagination.jsx';
import Loader from '../../components/UI/loader/Loader.jsx';
import { useFetching } from '../../hooks/useFetching.jsx';
import Container from '../../components/container/Container.jsx';

function Shop() {
	const { products } = useContext(Context);

	const [fetchProducts, isLoading, error] = useFetching(
		async (page, limit) => {
			await new Promise((resolve) => {
				setTimeout(() => {
					ProductsAPI.fetchProducts(page, limit).then((data) => {
						products.setProducts(data.content);
						products.setTotalPage(data.totalPages);
						products.setTotalCount(data.totalElements);
						resolve();
					});
				}, 1000);
			});
		}
	);

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<main className="shop">
			<Heading title="Shop" />
			<ShopFilters />
			{isLoading ?
				<Container>
					<Loader />
				</Container>
			:	<>
					<GridContainer
						items={products.products}
						renderItem={ProductElement}
					/>
					<Pagination />
				</>
			}
			<Features />
		</main>
	);
}

export default observer(Shop);

import React, { useEffect, useState } from 'react';
import Container from '../../components/container/Container';
import './Product.scss';
import { useParams } from 'react-router-dom';
import { ProductsAPI } from '../../http/productsAPI';

const Product = () => {
	/**
	 * @type {[IFullProduct, React.Dispatch<IFullProduct>]} state
	 */
	const [product, setProduct] = useState(null);
	const { id } = useParams();
	useEffect(() => {
		ProductsAPI.fetchProduct(id).then((data) => {
			console.log(data);
			setProduct(data)
		});
	}, []);

	return (
		<main>
			<Container>Product</Container>
		</main>
	);
};

export default Product;

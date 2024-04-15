import React, { useLayoutEffect, useState } from 'react';
import Container from '../../components/container/Container';
import './Product.scss';
import { useParams } from 'react-router-dom';
import { ProductsAPI } from '../../http/productsAPI';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Loader from '../../components/UI/loader/Loader';
import { useFetching } from '../../hooks/useFetching';
import useWindowResize from '../../hooks/useWindowResize.jsx';
import ProductInformation from '../../components/productInformation/ProductInformation.jsx';

const Product = () => {
	/**
	 * @type {[IFullProduct, React.Dispatch<IFullProduct>]} state
	 */

	const [product, setProduct] = useState(undefined);
	const { id } = useParams();
	const windowResizeIndex = useWindowResize([767.98]);
	const [getProduct, isProductLoading, productError] = useFetching(() => {
		ProductsAPI.fetchProduct(id).then((data) => {
			setProduct(data);
		});
	});
	useLayoutEffect(() => {
		getProduct();
	}, []);

	if (isProductLoading || product === undefined) {
		return (
			<main>
				<div className="product__loader-container">
					<Loader className="product__loader" />
				</div>
			</main>
		);
	}

	return (
		<main>
			<div className="product__navigation">
				<Container>
					<Breadcrumbs
						className={'product__navigation-links'}
						lastCrumb={product.productName}
					/>
				</Container>
			</div>
			<Container>
				<ProductInformation
					isProductLoading={isProductLoading}
					product={product}
					windowResizeIndex={windowResizeIndex}
				></ProductInformation>
			</Container>
		</main>
	);
};

export default Product;

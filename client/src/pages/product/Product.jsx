import React, {
	useCallback,
	useEffect,
	useLayoutEffect,
	useMemo,
	useState,
} from 'react';
import Container from '../../components/container/Container';
import './Product.scss';
import { useFetcher, useParams } from 'react-router-dom';
import { ProductsAPI } from '../../http/productsAPI';
import Counter from '../../components/UI/counter/Counter';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Loader from '../../components/UI/loader/Loader';
import { useFetching } from '../../hooks/useFetching';
import Button from '../../components/UI/button/Button.jsx';
import Facebook from '../../assets/additional icons/Facebook.jsx';
import Linkedin from '../../assets/additional icons/Linkedin.jsx';
import Twitter from '../../assets/additional icons/Twitter.jsx';
const Product = () => {
	/**
	 * @type {[IFullProduct, React.Dispatch<IFullProduct>]} state
	 */

	const [product, setProduct] = useState(undefined);
	const [count, setCount] = useState(1);
	const { id } = useParams();
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
				<Breadcrumbs
					className={'product__navigation-links'}
					lastCrumb={product.productName}
				/>
			</div>

			<div className="product-main">
				<div className="product-main__collage product-collage">
					<div className="product-collage__main-item">
						<img src="@img" alt="" />
					</div>

					<ul>
						<li>
							<div></div>
						</li>
					</ul>
				</div>

				<div className="product-main__about product-about">
					<h1 className="product-about__name"></h1>
					<h2 className="product-about__price"></h2>
					<div className="product-about__review">★★★★☆</div>
					<h3 className="product-about__description"></h3>
					<div className="product-about__colors product-colors"></div>

					<div className="product-about__interaction">
						<Counter count={count} setCount={setCount} />
						<Button
							className="a product-about__button"
							variant="rounded"
							fill={false}
							size="big"
						>
							Add To Cart
						</Button>
						<Button
							className="a product-about__button"
							variant="rounded"
							fill={false}
							size="big"
						>
							+ Compare
						</Button>
					</div>
				</div>

				<div className="product-main__additionals product-additionals">
					<div>SKU</div> <div>: {'SKU'}</div>
					<div>Category</div> <div>: {'SKU'}</div>
					<div>Share</div>{' '}
					<div>
						<a href="https://www.facebook.com/">
							<Facebook />
						</a>
						<a href="https://www.linkedin.com/" className="">
							<Linkedin />
						</a>
						<a href="https://twitter.com/" className="">
							<Twitter />
						</a>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Product;

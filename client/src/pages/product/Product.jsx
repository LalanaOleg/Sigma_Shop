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
import facebookURL from '../../assets/additional icons/facebook.svg';
import twitterURL from '../../assets/additional icons/twitter.svg';
import linkedinURL from '../../assets/additional icons/linkedin.svg';
import Colors from '../../components/UI/colors/Colors.jsx';
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
	const price = useMemo(() => {
		if (isProductLoading || product === undefined) return '';
		const startPrice = product.productPrice.toString() + '00';
		let res = '';
		if (startPrice.length == 1) res = '.0' + startPrice;
		else res = '.' + startPrice.slice(-2);
		for (let i = startPrice.length - 3; i >= 0; i -= 3) {
			if (i < 3) {
				res = startPrice.slice(0, i + 1) + res;
				break;
			}

			res = ',' + startPrice.slice(i - 2, i + 1) + res;
			console.log(i);
		}
		if (startPrice.length < 3) res = '0' + res;
		return '$ ' + res;
	}, [product]);
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
			<Container>
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

					<h1 className="product-main__name">{product.productName}</h1>
					<div className="product-main__about product-about">
						<h2 className="product-about__price">{price}</h2>
						<div className="product-about__review">
							<span className="product-about__stars">★★★★★</span>
							<span className="product-about__review-count">
								{product.productReviews.length} Cursomer Review
							</span>
						</div>
						<h3 className="product-about__description">
							{product.productDescription}
						</h3>
						<div className="product-about__colors product-colors">
							<h4 className="product-colors__title">Color</h4>
							<Colors
								colors={[
									{ id: 1, color: '#fffff' },
									{ id: 2, color: '#0000FF' },
									{ id: 3, color: '#FF0000' },
								]}
								id={product.id}
							></Colors>
						</div>

						<div className="product-about__interactions">
							<Counter className="product-about__counter" count={count} setCount={setCount} />
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
						<div>SKU</div>
						<div>:</div> <div> {product.productSku}</div>
						<div>Category</div>
						<div>:</div> <div> {product.productCategory}</div>
						<div>Share</div>
						<div>:</div>
						<div>
							<div className="product-additionals__link-container">
								<a
									className="product-additionals__link"
									href="https://www.facebook.com/"
								>
									<img src={facebookURL} alt="facebook" />
								</a>
								<a
									className="product-additionals__link"
									href="https://www.linkedin.com/"
								>
									<img src={linkedinURL} alt="linkedin" />
								</a>
								<a
									className="product-additionals__link"
									href="https://twitter.com/"
								>
									<img src={twitterURL} alt="twitter" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</main>
	);
};

export default Product;

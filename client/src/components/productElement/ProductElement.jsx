import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_ROUTE, PRODUCT_ROUTE } from '../../utils/paths';
import './ProductElement.scss';

/**
 * Returns the product element.
 * @param {IProduct} product an object
 */
const ProductElement = (product) => {
	if (product === undefined || product === null) {
		return (
			<article key={Math.random()} className="item-product skeleton">
				<div className="item-product__image-ibg"></div>
				<div className="item-product__content">
					<div className="item-product__name"></div>
					<div className="item-product__category"></div>
					<div className="item-product__price">
						<div className="item-product__new-price"></div>
					</div>
				</div>
				<div className="item-product__panel">
					<div className="item-product__actions">
						<button
							type="button"
							className="item-product__item _icon-share"
						>
							Share
						</button>
						<button
							type="button"
							className="item-product__item _icon-compare"
						>
							Compare
						</button>
						<button
							type="button"
							className="item-product__item _icon-heart"
						>
							Like
						</button>
					</div>
				</div>
			</article>
		);
	}

	const productLink = PRODUCT_ROUTE + '/' + product.productId;

	return (
		<article key={product.productId} className="item-product">
			<Link to={productLink} className="item-product__image-ibg">
				<img src={product.images[0]} alt={product.productName} />
			</Link>
			<div className="item-product__content">
				<Link to={productLink} className="item-product__name">
					{product.productName}
				</Link>
				<Link to={HOME_ROUTE} className="item-product__category">
					{product.productCategory}
				</Link>
				<div className="item-product__price">
					<div className="item-product__new-price">
						{product.productPrice} ₴
					</div>
					{/* <div className="item-product__old-price">Rp 3.500.000</div> */}
				</div>
			</div>
			<div className="item-product__panel">
				<div className="item-product__actions">
					<button type="button" className="item-product__item _icon-share">
						Share
					</button>
					<button
						type="button"
						className="item-product__item _icon-compare"
					>
						Compare
					</button>
					<button type="button" className="item-product__item _icon-heart">
						Like
					</button>
				</div>
			</div>
			{/* <ul className="item-product__labels">
				<li className="item-product__label item-product__label_discount">
					-30%
				</li>
				<li className="item-product__label item-product__label_new">New</li>
			</ul> */}
		</article>
	);
};

export default ProductElement;

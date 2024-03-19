import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_ROUTE, PRODUCT_ROUTE } from '../../utils/paths';
import './ProductElement.scss';

/**
 * A number, or a string containing a number.
 * @typedef {Object} IProduct
 * @property {number} productID - id of product.
 * @property {string} imageURL - main image of product.
 * @property {string} name - name of product.
 * @property {string} category - category of product.
 * @property {number} price - price of product.
 */

/**
 * Returns the product element.
 * @param {IProduct} product an object
 */
const ProductElement = (product) => {
	const productLink = PRODUCT_ROUTE + '/' + product.productID
	return (
		<article key={product.productID} className="item-product">
			<Link to={productLink} className="item-product__image-ibg">
				<img src={product.imageURL} alt={product.name} />
			</Link>
			<div className="item-product__content">
				<Link to={productLink} className="item-product__name">
					{product.name}
				</Link>
				<Link to={HOME_ROUTE} className="item-product__category">
					{product.category}
				</Link>
				<div className="item-product__price">
					<div className="item-product__new-price">{product.price} ₴</div>
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

import React, { useState, useMemo } from 'react';
import './ProductInformation.scss';
import { getStringPrice } from '../../utils/functions.js';
import StarRating from '../../components/UI/starRating/StarRating.jsx';
import Slider from '../../components/UI/slider/Slider.jsx';
import facebookURL from '../../assets/additional icons/facebook.svg';
import twitterURL from '../../assets/additional icons/twitter.svg';
import linkedinURL from '../../assets/additional icons/linkedin.svg';
import Button from '../../components/UI/button/Button.jsx';
import Colors from '../../components/UI/colors/Colors.jsx';
import { isTouch } from '../../utils/functions.js';
import Counter from '../../components/UI/counter/Counter';
function ProductInformation({ product, isMobileSize, isProductLoading }) {
	const [count, setCount] = useState(1);
	const [currentSlideSrc, setCurrentSlideSrc] = useState('');

	const price = useMemo(() => {
		if (isProductLoading || product === undefined) return '';
		return getStringPrice(product.productPrice);
	}, [product]);

	let slides = useMemo(() => {
		return [
			<img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww" />,
			<img src="https://i02.appmifile.com/373_operatorx_operatorx_opx/10/05/2023/657e399a69e188fb194c3804f33fb67d!348x348.png" />,
		];
	}, [product]);

	slides = useMemo(() => {
		return slides.map((slide) => {
			return (
				<div
					className={
						isMobileSize ?
							'small-screen-slider__img'
						:	'big-screen-slider__img'
					}
				>
					{slide}
				</div>
			);
		});
	}, [isMobileSize]);

	function makeSlideMain(target) {
		if (target.closest('.big-screen-slider__img')) {
			if (target.classList.contains('big-screen-slider__img')) {
				target = target.firstElementChild;
			}
			setCurrentSlideSrc(target.src);
		}
	}

	return (
		<div className="product-main">
			{isMobileSize ?
				<div className="product-main__slider small-screen-slider">
					<Slider
						slides={slides}
						className="small-screen-slider__content"
						navigation={!isTouch}
						pagination={{ clickable: true }}
						slidesPerView={1}
						spaceBetween={0}
					/>
				</div>
			:	<div className="product-main__slider big-screen-slider">
					<div
						onClick={(e) => makeSlideMain(e.target)}
						className="big-screen-slider__container"
					>
						<Slider
							slides={slides}
							className="big-screen-slider__content"
							scrollbar={{ draggable: true }}
							slidesPerView={5}
							direction="vertical"
							spaceBetween={'5%'}
						/>
					</div>
					<div className="big-screen-slider__main-slide">
						<img src={currentSlideSrc} alt="" />
					</div>
				</div>
			}

			<h1 className="product-main__name">{product.productName}</h1>

			<div className="product-main__about product-about">
				<h2 className="product-about__price">{price}</h2>
				<div className="product-about__review">
					<StarRating className="star-rating" rate={product.averageRate} />
					<span className="product-about__review-count">
						{product.amountOfReviews} Cursomer Review
					</span>
				</div>
				<h3 className="product-about__description">
					{product.productDescription}
				</h3>
				<div className="product-about__colors product-colors">
					<h4 className="product-colors__title">Color</h4>
					<Colors
						className="product-colors__content"
						colors={product.productColors}
						id={product.id}
					></Colors>
				</div>

				<div className="product-about__interactions">
					<Counter
						className="product-about__counter"
						count={count}
						setCount={setCount}
					/>
					<Button
						className="product-about__button"
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
	);
}

export default ProductInformation;
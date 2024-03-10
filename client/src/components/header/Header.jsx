import React, { useState, useEffect } from 'react';
import Container from '../container/Container.jsx';
import { ACCOUNT_ROUTE, HOME_ROUTE, SHOP_ROUTE } from '../../utils/paths.js';
import { NavLink, useLocation } from 'react-router-dom';
import {
	bodyLockToggle,
	bodyUnlock,
	getScrollBarSize,
} from '../../utils/functions.js';
import './Header.scss';

const Header = () => {
	const [isMenuActive, setIsMenuActive] = useState(false);
	const location = useLocation();

	// close menu on location change
	useEffect(() => {
		menuClose();
	}, [location]);

	function toggleMenu() {
		setIsMenuActive(!isMenuActive);
		bodyLockToggle(0);
		document.documentElement.classList.toggle('menu-open');
	}
	function menuClose() {
		if (!isMenuActive) return;
		bodyUnlock(0);
		setIsMenuActive(false);
		document.documentElement.classList.remove('menu-open');
	}

	return (
		<header className="header">
			<Container className="header__container">
				<div
					style={{
						// add padding right so that elements do not shake
						paddingRight: (isMenuActive ? getScrollBarSize() : 0) + 'px',
					}}
					className="header__menu menu"
				>
					<NavLink to={HOME_ROUTE} className="header__logo">
						Furniro
					</NavLink>
					<nav className="menu__body">
						<ul className="menu__list">
							<li className="menu__item">
								<NavLink to={HOME_ROUTE} className="menu__link">
									Home
								</NavLink>
							</li>
							<li className="menu__item">
								<NavLink to={SHOP_ROUTE} className="menu__link">
									Shop
								</NavLink>
							</li>
							<li className="menu__item">
								<NavLink to={'/about'} className="menu__link">
									About
								</NavLink>
							</li>
							<li className="menu__item">
								<NavLink to={'/contact'} className="menu__link">
									Contact
								</NavLink>
							</li>
						</ul>
					</nav>
					<ul className="header__actions actions-header">
						<li className="actions-header__item">
							<NavLink
								to={ACCOUNT_ROUTE}
								className="actions-header__icon _icon-account"
							></NavLink>
						</li>
						<li className="actions-header__item">
							<button
								type="button"
								className="actions-header__icon _icon-search"
							></button>
						</li>
						<li className="actions-header__item">
							<button
								type="button"
								className="actions-header__icon _icon-heart"
							></button>
						</li>
						<li className="actions-header__item">
							<button
								type="button"
								className="actions-header__icon _icon-cart"
							></button>
						</li>
						<button
							type="button"
							className="actions-header__icon icon-menu"
							onClick={toggleMenu}
						>
							<span></span>
						</button>
					</ul>
				</div>
			</Container>
		</header>
	);
};

export default Header;

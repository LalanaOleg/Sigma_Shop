import React from 'react';
import CartModal from './cartModal/CartModal';
import { memo } from 'react';

/**
 * @param {Object} props
 * @param {(modalName) => modalHandler} props.getModalHandler
 * @returns
 */
const Modals = ({ getModalHandler }) => {
	const cartModalHandler = getModalHandler('cartModal');
	return (
		<>
			{cartModalHandler.isOpen && <CartModal modalHandler={cartModalHandler} />}
		</>
	);
};

export default memo(Modals);

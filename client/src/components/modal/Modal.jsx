import React from 'react';
import './Modal.css';

const Modal = ({ active, setActive, children, className }) => {
	return (
		<div
			onClick={() => setActive(false)}
			aria-hidden={active}
			className={['popup', className, active ? 'popup_show' : ''].join(' ')}
		>
			<div className="popup__wrapper">
				<div
					className="popup__content"
					onClick={(e) => e.stopPropagation()}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Modal;

import React from 'react';

/**
 * @param {Object} ButtonProps
 * @param {string} className class of this button
 * @param {function} onClick callback function for click
 * @param {"straight"|"rounded"} variant variant of button
 * @param {"small"|"big"} size size of button
 * @param {...any} props other props
 * @returns Button
 */
const Button = ({ className, onClick, variant, size, children, ...props }) => {
	return (
		<button
			{...props}
			onClick={onClick}
			className={['btn', className].join(' ')}
		>
			{children}
		</button>
	);
};

export default Button;

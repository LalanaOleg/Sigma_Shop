import React from 'react';
import './Input.scss';

const Input = ({ label, className, name, ...props }) => {
   const nameOfInput = name ?? className ?? label;
	return (
		<div className={'input-wrapper ' + (className ?? '')}>
			{label && (
				<label className="input-wrapper__label" htmlFor={nameOfInput}>
					{label}
				</label>
			)}
			<input
				className="input-wrapper__input"
				name={nameOfInput}
				{...props}
			/>
		</div>
	);
};

export default Input;

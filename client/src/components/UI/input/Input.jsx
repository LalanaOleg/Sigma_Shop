import React from 'react';
import './Input.scss';

const Input = ({ label, className, id, ...props }, ref) => {
	return (
		<div className={'input-wrapper ' + (className ?? '')}>
			{label && (
				<label className="input-wrapper__label" htmlFor={id}>
					{label}
				</label>
			)}
			<input
				ref={ref}
				className="input-wrapper__input"
				id={id}
				{...props}
			/>
		</div>
	);
};

export default React.forwardRef(Input);

import React from 'react';
import './Container.scss';

export const Container = ({ children, className }) => {
	return (
		<div className={[className, 'container'].join(' ')}>
			{children}
		</div>
	)
}

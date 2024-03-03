import React from 'react';
import './Container.scss';

const Container = ({ children, className }) => {
	return (
		<div className={[className, 'container'].join(' ')}>
			{children}
		</div>
	)
}

export default Container;
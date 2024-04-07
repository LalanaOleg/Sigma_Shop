import React from 'react';
import './Colors.scss';
import { NavLink } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../../utils/paths';
function Colors({ colors, id }) {
	return (
		<div className="color-list">
			{colors.map((itemColor) => {
				const classNames = ['color-list__item'];
				if (itemColor.id == id) classNames.push('active');
				return (
					<NavLink to={PRODUCT_ROUTE + "/" + itemColor.id}
						key={itemColor.id}
						style={{ backgroundColor: itemColor.color }}
						className={classNames.join(' ')}
					></NavLink>
				);
			})}
		</div>
	);
}

export default Colors;

import React from 'react';
import './Counter.scss';
export default function Counter({ count, setCount, className }) {
	const classNames = ["counter", className]
	function minus() {
		if (count <= 1) return;
		setCount(count - 1);
	}
	return (
		<div className={classNames.join(" ")}>
			<button onClick={minus} className="counter__button counter__button_minus">
				-
			</button>
			<div className='counter__content'>
				<span className="counter__value">{count}</span>
			</div>
			<button
				onClick={() => setCount(count + 1)}
				className="counter__button counter__button_plus"
			>
				+
			</button>
		</div>
	);
}

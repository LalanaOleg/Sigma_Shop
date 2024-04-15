import React from 'react';
import './Counter.scss';
export default function Counter({ count, setCount, className }) {
	const maxValue = 9999999;
	const classNames = ['counter', className];
	function plus() {
		if (count >= maxValue) return;
		setCount(count + 1);
	}
	function minus() {
		if (count <= 1) return;
		setCount(count - 1);
	}
	function getValidValue(e) {
		const res = parseInt(e.target.value);
		if (isNaN(res) || res < 1) return 1;
		if (res > maxValue) return maxValue;
		return res;
	}
	return (
		<div className={classNames.join(' ')}>
			<button
				onClick={minus}
				className="counter__button counter__button_minus"
			>
				-
			</button>
			<input
				className="counter__value"
				value={count}
				onChange={(e) => setCount(getValidValue(e))}
				onFocus={(e)=>e.target.select()}
			/>
			<button
				onClick={plus}
				className="counter__button counter__button_plus"
			>
				+
			</button>
		</div>
	);
}

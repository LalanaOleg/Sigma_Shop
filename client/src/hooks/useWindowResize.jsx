import { useEffect, useState, useMemo } from 'react';
export default function useWidnowResize(breakPoints) {
	const [breakPointIndex, setBreakPointIndex] = useState(0);
	useEffect(() => {
		let prevValue = -1;
		function handleResize(width) {
			for (let i = 0; i < breakPoints.length; i++) {
				if (width < breakPoints[i]) {
					if (i == prevValue) return;
					setBreakPointIndex(i);
					prevValue = i;
					return;
				}
			}
			if (breakPoints.length !== prevValue) {
				setBreakPointIndex(breakPoints.length);
				prevValue = breakPoints.length;
			}
		}
		handleResize(window.innerWidth);
		window.addEventListener('resize', (e) =>
			handleResize(e.target.innerWidth)
		);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return breakPointIndex;
}

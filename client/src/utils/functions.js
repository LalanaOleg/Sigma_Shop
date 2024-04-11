let bodyLockStatus = true;
export let bodyLockToggle = (delay = 500) => {
	if (document.documentElement.classList.contains('lock')) {
		bodyUnlock(delay);
	} else {
		bodyLock(delay);
	}
};
export let bodyUnlock = (delay = 500) => {
	let body = document.querySelector('body');
	if (bodyLockStatus) {
		if (delay === 0) {
			body.style.paddingRight = '0px';
			document.documentElement.classList.remove('lock');
		} else {
			setTimeout(() => {
				body.style.paddingRight = '0px';
				document.documentElement.classList.remove('lock');
			}, delay);
		}
		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
};
export let bodyLock = (delay = 500) => {
	let body = document.querySelector('body');
	if (bodyLockStatus) {
		body.style.paddingRight = getScrollBarSize() + 'px';
		document.documentElement.classList.add('lock');

		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
};
export function getScrollBarSize() {
	return window.innerWidth - document.querySelector('.wrapper').offsetWidth;
}
export let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
export const isTouch = isMobile.any() ? true : false;
export function addTouchClass() {
	// Додавання класу _touch для HTML, якщо браузер мобільний
	if (isTouch) document.documentElement.classList.add('touch');
}


export function getStringPrice(startPrice, currency="$") {
	startPrice = startPrice.toFixed(2);
	let res = startPrice.slice(-3);
		for (let i = startPrice.length - 4; i >= 0; i -= 3) {
			if (i < 3) {
				res = startPrice.slice(0, i + 1) + res;
				break;
			}

			res = ',' + startPrice.slice(i - 2, i + 1) + res;
		}
		if (startPrice.length < 3) res = '0' + res;
		return currency + " " + res;
}
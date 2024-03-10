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

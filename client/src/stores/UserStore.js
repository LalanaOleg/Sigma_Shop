import { makeAutoObservable } from 'mobx';

export class UserStore {
	constructor() {
		this._isAuth = true;
		this._data = { role: 'Admin' };
		makeAutoObservable(this);
	}

	setIsAuth(bool) {
		this._isAuth = bool;
	}
	setData(data) {
		this._data = data;
	}

	get isAuth() {
		return this._isAuth;
	}
	get data() {
		return this._data;
	}
}

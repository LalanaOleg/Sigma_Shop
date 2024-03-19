import { makeAutoObservable } from 'mobx';

export class ProductStore {
	constructor() {
		this._products = [];
		this._page = 1;
		this._totalCount = 0;
		this._limit = 4;
		makeAutoObservable(this);
	}

	setProducts(products) {
		this._products = products;
	}
	setPage(page) {
		this._page = page;
	}
	setLimit(limit) {
		this._limit = limit;
	}
	setTotalCount(count) {
		this._totalCount = count;
	}

	get products() {
		return this._products;
	}
	get totalCount() {
		return this._totalCount;
	}
	get page() {
		return this._page;
	}
	get limit() {
		return this._limit;
	}
}

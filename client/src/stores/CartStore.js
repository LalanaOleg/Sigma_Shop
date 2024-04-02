import { makeAutoObservable } from "mobx";

export class CartStore {
	constructor() {
		/** @type {Array.<CartItem>} */
		this._cartArray = [];
		makeAutoObservable(this);
	}
}
import { makeAutoObservable } from "mobx";

/**
 * A number, or a string containing a number.
 * @typedef {Object} CartItem
 * @property {number} productID - id of product.
 * @property {string} imageURL - main image of product.
 * @property {string} name - name of product.
 * @property {number} price - price of product.
 * @property {number} amoun - amount of product.
 */

export class CartStore {
	constructor() {
		/** @type {Array.<CartItem>} */
		this._cartArray = [];
		makeAutoObservable(this);
	}
}
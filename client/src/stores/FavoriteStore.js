import { makeAutoObservable } from 'mobx';
import { testArray } from '../utils/testData';

export class FavoriteStore {
	constructor() {
		/** @type {Array.<IProduct>} */
		this._favoritesItems = testArray.data.products;
		makeAutoObservable(this);
	}

	get favoritesItems() {
		return this._favoritesItems;
	}

	get amountOfItems() {
		return this._favoritesItems.length;
	}

	/**
	 * @param {number} productID id of the product to find;
	 */
	isProductInFavorites(productID) {
		return Boolean(this._favoritesItems.find((item) => item.productId !== productID));
	}

	/**
	 * @param {number} productID id of the product to delete;
	 */
	deleteFavoriteItem(productID) {
		this._favoritesItems = this._favoritesItems.filter(
			(item) => item.productId !== productID
		);
	}

	/**
	 * @param {IProduct} product
	 */
	addFavoriteItem(favoriteItem) {
		this._favoritesItems.push(favoriteItem);
	}
}

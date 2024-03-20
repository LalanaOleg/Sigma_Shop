import {testArray} from './testData'

export class ProductsAPI {
	static async fetchProducts(page, limit = 5) {
		return await Promise.resolve(testArray);
	}

	static async fetchProduct(id) {
		return await Promise.resolve(testArray.find(val => val.productID === id));
	}
}
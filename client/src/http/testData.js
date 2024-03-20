import first from '../assets/img/test-products/01.jpg';
import second from '../assets/img/test-products/02.jpg';
import third from '../assets/img/test-products/03.jpg';
import fouth from '../assets/img/test-products/04.jpg';

let i = 0;
export const testArray = [
	{
		productID: i++,
		imageURL: first,
		name: 'Syltherine',
		category: 'Stylish cafe chair',
		price: 2_500_500,
	},
	{
		productID: i++,
		imageURL: second,
		name: 'Leviosa',
		category: 'Stylish cafe chair',
		price: 2_500_000,
	},
	{
		productID: i++,
		imageURL: third,
		name: 'Lolito',
		category: 'Luxury big sofa',
		price: 7_500_500,
	},
	{
		productID: i++,
		imageURL: fouth,
		name: 'Respira',
		category: 'Outdoor bar table and stool',
		price: 500_500,
	},
];

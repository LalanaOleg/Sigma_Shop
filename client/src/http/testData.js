import first from '../assets/img/test-products/01.jpg';
import second from '../assets/img/test-products/02.jpg';
import third from '../assets/img/test-products/03.jpg';
import fouth from '../assets/img/test-products/04.jpg';

let i = 0;
export const testArray = {
	data: {
		products: [
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
		],
		totalCount: i,
	},
};

export const testObject = {
	data: {
		product: {
			productID: 1,
			images: ['imageURL'],
			name: 'Syltherine',
			category: 'Stylish cafe chair',
			sku: "sku_product",
			price: 2_500_500,
			colors: [{ color: '#ffffff', productID: 3 }],
			description: 'Some description',
			amountOfReviews: 1,
			avarageRate: 4,
			reviews: [
				{
					user: { userID: 1, userName: 'Name' },
					message: 'Some message',
					rate: 4,
				},
			],
		},
	},
};

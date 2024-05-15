import { $host, $authHost } from '.';
import { jwtDecode } from 'jwt-decode';

export class UserAPI {
	static TOKEN_NAME = 'sigma-token';

	static async registration(userName, email, password) {
		const response = await $host.post('auth/registration', {
			email,
			userName,
			password,
		});
		const data = response.data;
		const token = data.token;
		localStorage.setItem(UserAPI.TOKEN_NAME, token);
		return data;
	}

	static async login(email, password) {
		const response = await $host.post('auth/login', {
			email,
			password,
		});
		const data = response.data;
		const token = data.token;
		localStorage.setItem(UserAPI.TOKEN_NAME, token);
		return data;
	}

	static async getUserInfo(userId) {
		const response = await $host.get('user/' + userId);
		const data = response.data;
		return data;
	}
}

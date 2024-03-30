import React, { useContext, useState } from 'react';
import Container from '../../components/container/Container';
import { observer } from 'mobx-react';
import { UserAPI } from '../../http/userAPI';
import { Context } from '../../index';
import './Login.scss';

const Login = observer(() => {
	const { user } = useContext(Context);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function signIn(e) {
		e.preventDefault();
		console.log('Sigh In');
		user.setIsAuth(true);
		// try {
		// 	const data = await UserAPI.login(email, password);
		// 	console.log(data);
		// 	user.setIsAuth(true);
		// } catch (error) {
		// 	console.log(error);
		// }
	}

	return (
		<main>
			<Container className="login">
				<form method="POST" onSubmit={signIn}>
					<h1>Sign in</h1>
					<section>
						<label htmlFor="email">Email</label>
						<input
							id="email"
							name="email"
							type="email"
							onChange={(e) => setEmail(e.target.value)}
							autoComplete="username"
							required
							autoFocus
						/>
					</section>
					<section>
						<label htmlFor="password">Password</label>
						<input
							id="password"
							name="password"
							type="password"
							onChange={(e) => setPassword(e.target.value)}
							autoComplete="current-password"
							required
						/>
					</section>
					<button type="submit" id="sign-in">
						Sign in
					</button>
				</form>
			</Container>
		</main>
	);
});

export default Login;

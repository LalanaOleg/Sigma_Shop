import { observer } from 'mobx-react';
import React, { useContext, useState } from 'react';
import { redirect } from 'react-router-dom';
import Container from '../../components/container/Container';
import { UserAPI } from '../../http/userAPI';
import { Context } from '../../index';
import { ACCOUNT_ROUTE } from '../../utils/paths';
import './Login.scss';
import Button from '../../components/UI/button/Button';
import Input from '../../components/UI/input/Input';

const Login = observer(() => {
	const { user } = useContext(Context);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function signIn(e) {
		e.preventDefault();
		console.log('Sigh In');
		user.setIsAuth(true);

		redirect(ACCOUNT_ROUTE);
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
						<Input
							id="email"
							name="email"
							type="email"
							label="Email"
							onChange={(e) => setEmail(e.target.value)}
							autoComplete="username"
							required
							autoFocus
						/>
					</section>
					<section>
						<Input
							label="Password"
							id="password"
							name="password"
							type="password"
							onChange={(e) => setPassword(e.target.value)}
							autoComplete="current-password"
							required
						/>
					</section>
					<Button type="submit" id="sign-in">
						Sign in
					</Button>
				</form>
			</Container>
		</main>
	);
});

export default Login;

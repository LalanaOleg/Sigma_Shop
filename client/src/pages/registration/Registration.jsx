import React, { useContext, useState } from 'react';
import Container from '../../components/container/Container';
import { observer } from 'mobx-react';
import { UserAPI } from '../../http/userAPI';
import { Context } from '../../index';
import './Registration.scss';

const Registration = observer(() => {
	const { user } = useContext(Context);

	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function signUp(e) {
		e.preventDefault();
		console.log('Sigh In');
		user.setIsAuth(true);
		// try {
		// 	e.preventDefault();
		// 	const data = await UserAPI.registration(userName, email, password);
		// 	user.setIsAuth(true);
		// } catch (error) {
		// 	console.log(error);
		// }
	}

	return (
		<main>
			<Container className="registration">
				<form method="POST" onSubmit={signUp}>
					<h1>Sign up</h1>
					<section>
						<label htmlFor="name">User Name</label>
						<input
							id="name"
							name="name"
							autoComplete="name"
							onChange={(e) => {
								setUserName(e.target.value);
							}}
							required
						/>
					</section>
					<section>
						<label htmlFor="email">Email</label>
						<input
							id="email"
							name="email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							autoComplete="username"
							type="email"
							required
						/>
					</section>
					<section>
						<label htmlFor="password">Password</label>
						<button
							id="toggle-password"
							type="button"
							aria-label="Show password as plain text. Warning: this will display your password on the screen."
						>
							Show password
						</button>
						<input
							id="password"
							name="password"
							type="password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							autoComplete="new-password"
							minLength="8"
							aria-describedby="password-constraints"
							required
						/>
						<div id="password-constraints">Eight or more characters.</div>
					</section>
					<button type="submit" id="sign-up">
						Sign up
					</button>
				</form>
			</Container>
		</main>
	);
});

export default Registration;

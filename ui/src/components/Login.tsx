import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthView.scss';

const Login = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async () => {
		const url = 'http://localhost:1337/auth/login';

		await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
			body: JSON.stringify({ username: userName, password: password }),
		});
		return;
	};

	return (
		<div className='auth-view'>
			<h1>Login</h1>
			<div className='auth-container'>
				<div className='input-container'>
					<label htmlFor='userName'>Username:</label>
					<input
						type='text'
						onChange={(e) => setUserName(e.target.value)}
						value={userName}
						name='username'
						id='userName'
					/>
				</div>
				<div className='input-container'>
					<label htmlFor='password'>Password:</label>
					<input
						type='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						name='password'
						id='password'
					/>
				</div>
			</div>
			<button onClick={handleLogin}>Login</button>
			<Link className='redirect-link' to='/register'>
				You don't have an account? Register now!
			</Link>
		</div>
	);
};

export default Login;

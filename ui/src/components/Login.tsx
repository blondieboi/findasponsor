import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthView.scss';
import { baseUrl } from '../utils/api';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isError, setIsError] = useState(false);

	const handleLogin = async () => {
		await fetch(`${baseUrl}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
			body: JSON.stringify({ username, password }),
		})
			.then((res) => {
				if (res.ok) {
					return;
				}
				setIsError(true);
			})
			.catch((err) => {
				setIsError(true);
			});
	};

	return (
		<div className='auth-view'>
			<h1>Login</h1>
			<div className='auth-container'>
				<div className='input-container'>
					<label htmlFor='userName'>Username:</label>
					<input
						type='text'
						onChange={(e) => {
							setUsername(e.target.value);
							setIsError(false);
						}}
						value={username}
						name='username'
						id='userName'
					/>
				</div>
				<div className='input-container'>
					<label htmlFor='password'>Password:</label>
					<input
						type='password'
						onChange={(e) => {
							setPassword(e.target.value);
							setIsError(false);
						}}
						value={password}
						name='password'
						id='password'
					/>
				</div>
			</div>
			<button onClick={handleLogin}>Login</button>
			{isError ? (
				<div className='error-container'>
					<p className='error-message'>
						Could not login, check username and password.
					</p>
				</div>
			) : (
				<></>
			)}
			<Link className='redirect-link' to='/register'>
				You don't have an account? Register now!
			</Link>
		</div>
	);
};

export default Login;

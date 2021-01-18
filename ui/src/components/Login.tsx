import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthView.scss';
import { loginUser } from '../utils/api';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	//FIX ON API SiDE AS IT DOESNT Error on failed auth
	const [isError, setIsError] = useState(false);

	const handleLogin = async () => {
		loginUser(username, password).catch((err: Error) => {
			console.log(err);
			setIsError(true);
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

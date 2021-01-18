import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthView.scss';
import { baseUrl } from '../utils/api';

const Register = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isError, setIsError] = useState(false);

	const handleRegistration = async () => {
		await fetch(`${baseUrl}/api/user`, {
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
			.catch((_err) => {
				setIsError(true);
			});
	};

	return (
		<div className='auth-view'>
			<h1>Register</h1>
			<div className='auth-container'>
				<div className='input-container'>
					<label htmlFor='userName'>Username:</label>
					<input
						type='text'
						onChange={(e) => setUsername(e.target.value)}
						value={username}
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
			<button onClick={handleRegistration}>Register</button>
			{isError ? (
				<div className='error-container'>
					<p className='error-message'>
						Could not register, check username and password length.
					</p>
				</div>
			) : (
				<></>
			)}
			<Link className='redirect-link' to='/login'>
				Already have an account? Login here!
			</Link>
		</div>
	);
};

export default Register;

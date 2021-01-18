import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthView.scss';

const Register = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const handleRegistration = async () => {
		const url = 'http://localhost:1337/api/user';

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
			<h1>Register</h1>
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
			<button onClick={handleRegistration}>Register</button>
			<Link className='redirect-link' to='/login'>
				Already have an account? Login here!
			</Link>
		</div>
	);
};

export default Register;

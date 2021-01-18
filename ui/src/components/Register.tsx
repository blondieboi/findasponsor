import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthView.scss';
import { registerUser } from '../utils/api';

const Register = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleRegistration = async () => {
		registerUser(username, password).then((_res) => {
			fetch('http://localhost:1337/auth/authenticated', {
				method: 'GET',
				credentials: 'include',
				headers: {
					'Access-Control-Allow-Origin': 'http://localhost:3000',
				},
			}).catch((err) => console.log(err));
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
			<Link className='redirect-link' to='/login'>
				Already have an account? Login here!
			</Link>
		</div>
	);
};

export default Register;

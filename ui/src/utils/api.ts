const baseUrl = 'http://localhost:1337';

export const loginUser = async (username: string, password: string) => {
	await fetch(`${baseUrl}/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: JSON.stringify({ username, password }),
	});
};

export const registerUser = async (username: string, password: string) => {
	await fetch(`${baseUrl}/api/user`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: JSON.stringify({ username, password }),
	});
};

export const isAuthenticated = async () => {
	await fetch(`${baseUrl}/auth/authenticate`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Access-Control-Allow-Origin': 'http://localhost:3000',
		},
	});
};

export const baseUrl = 'http://localhost:1337';

export const isAuthenticated = async () => {
	await fetch(`${baseUrl}/auth/authenticate`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Access-Control-Allow-Origin': 'http://localhost:3000',
		},
	});
};

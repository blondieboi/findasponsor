import { CorsOptions } from 'cors';

export const corsConfig: CorsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	preflightContinue: false,
	optionsSuccessStatus: 204,
};

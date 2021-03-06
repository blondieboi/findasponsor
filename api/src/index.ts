/// <reference path='./types/env.d.ts' />;
require('dotenv').config();
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { userRouter } from './routes/user';
import { missionRouter } from './routes/mission';
import { authRouter } from './routes/auth';
import { databaseConfig } from './config/database.config';
import { sessionConfig } from './config/session.config';
import { corsConfig } from './config/cors.config';
import {
	deserializer,
	localStrategy,
	serializer,
} from './config/passport.config';

const main = async () => {
	//DATABASE CONNECTION
	await createConnection(databaseConfig).catch((err: Error) =>
		console.log(`Error establishing database connection: ${err.message}`)
	);

	// MIDDLEWEAR
	const app = express();
	app.use(express.json());
	app.use(session(sessionConfig));
	app.use(cors(corsConfig));

	//PASSPORT
	passport.serializeUser(serializer);
	passport.deserializeUser(deserializer);
	passport.use(localStrategy);
	app.use(passport.initialize());
	app.use(passport.session());

	//ROUTES
	app.use('/api/user', userRouter);
	app.use('/api/map', missionRouter);
	app.use('/auth', authRouter);
	app.get('/', (_req, res) => {
		res.send('Hello World!');
	});

	// START HTTP SERVER
	const port = parseInt(process.env.API_PORT, 10);
	app.listen(port, () => {
		console.log(`Server started at http:///localhost:${port}`);
	});
};

main();

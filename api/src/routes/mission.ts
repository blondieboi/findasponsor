import express from 'express';
import { Mission } from '../entities/Mission';
import { User } from '../entities/User';
import { authMiddleware } from '../middlewear/auth.middlewear';

export let missionRouter = express.Router();

missionRouter.get('/', async (_req, res) => {
	const missions = await Mission.find();

	if (missions) {
		return res.status(200).json(missions);
	}

	return res.status(500).json({ message: 'Something went wrong.' });
});

missionRouter.get('/:id', async (req, res) => {
	const { id } = req.params;

	if (!id) {
		return res.status(400).json({ message: 'id parameter is required' });
	}

	const mission = await Mission.findOne(parseInt(id, 10));

	if (!mission) {
		return res.status(404).json({ message: 'Mission not found.' });
	}

	return res.json(mission);
});

missionRouter.post('/', authMiddleware, async (req, res) => {
	//@ts-ignore
	const { id } = req.user;

	const { missionName, missionDescription } = req.body;

	if (!missionName || !missionDescription) {
		return res
			.status(400)
			.json('Request body should contain missionName and missionDescription');
	}

	const user = await User.findOne(parseInt(id, 10));
	if (user) {
		const mission = new Mission();
		mission.missionName = missionName;
		mission.missionDescription = missionDescription;
		mission.user = user;
		await Mission.save(mission);

		return res.status(200).json(user.missions);
	} else {
		res.status(404).json({ message: 'User not found' });
	}

	return res.status(500).json({ message: 'Something went wrong.' });
});

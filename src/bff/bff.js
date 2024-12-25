import { getUser } from './get-user.js';
import { addUser } from './add-user.js';
import { createSession } from './create-session.js';

export const server = {
	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);

		if (!user) {
			return { error: 'User not found', res: null };
		}

		if (user.password !== authPassword) {
			return { error: 'Wrong password', res: null };
		}

		return {
			error: null,
			res: createSession(user.role_id),
		};
	},
	async register(regLogin, regPassword) {
		const user = await getUser(regLogin);

		if (user) {
			return { error: 'Такой логин уже занят', res: null };
		}

		const newUser = await addUser(regLogin, regPassword);

		return {
			error: null,
			res: createSession(newUser.role_id),
		};
	},
};

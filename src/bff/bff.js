export const server = {
	async authorize(authLogin, authPassword) {
		const users = await fetch('http://localhost:3000/users').then((loadedUsers) =>
			loadedUsers.json(),
		);

		const user = users.find(({ login }) => login === authLogin);

		if (!user) {
			return { error: 'User not found', res: null };
		}

		if (user.password !== authPassword) {
			return { error: 'Wrong password', res: null };
		}

		const session = {
			logout() {
				Object.key(session).forEach((key) => delete session[key]);
			},
			removeComment() {
				console.log('removeComment');
			},
		};

		return {
			error: null,
			res: session,
		};
	},
};

import { removeComment } from './session';
import { ROLE } from '../constants/index.js';

export const createSession = (roleId) => {
	const session = {
		logout() {
			Object.key(session).forEach((key) => delete session[key]);
		},
	};

	switch (roleId) {
		case ROLE.ADMIN: {
			session.removeComment = removeComment;
			break;
		}
		case ROLE.MODERATOR: {
			session.removeComment = removeComment;
			break;
		}
		case ROLE.READER: {
			break;
		}
		default:
		// ничего не делать
	}

	return session;
};
import { ACTION_TYPE as ACTIONS } from './action-type.js';

export const removeComment = (commentId) => ({
	type: ACTIONS.REMOVE_COMMENT,
	payload: commentId,
});

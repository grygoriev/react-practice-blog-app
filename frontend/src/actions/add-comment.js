import { ACTION_TYPE as ACTIONS } from './action-type.js';

export const addComment = (comment) => ({
	type: ACTIONS.ADD_COMMENT,
	payload: comment,
});

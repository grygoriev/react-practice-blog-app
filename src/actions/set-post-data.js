import { ACTION_TYPE as ACTIONS } from './action-type.js';

export const setPostData = (postData) => ({
	type: ACTIONS.SET_POST_DATA,
	payload: postData,
});

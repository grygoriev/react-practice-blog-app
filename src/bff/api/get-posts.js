import { transformPost } from '../transformers';

export const getPosts = (searchPhrase, page, limit) =>
	fetch(
		`http://localhost:3005/posts?title_like=${searchPhrase}&_page=${page}&_limit=${limit}`,
	)
		.then((response) => {
			const totalCountStr = response.headers.get('X-Total-Count');
			const totalCount = totalCountStr ? parseInt(totalCountStr, 10) : 0;
			const lastPage = totalCount ? Math.ceil(totalCount / limit) : 1;

			return response.json().then((data) => ({
				data,
				lastPage,
			}));
		})
		.then(({ data, lastPage }) => {
			const posts = data && data.map(transformPost);

			return {
				posts,
				lastPage,
			};
		});

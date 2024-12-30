import { Pagination, PostCard } from './components';
import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks';
import styled from 'styled-components';
import { PAGINATION_LIMIT } from '../../constants';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT).then(
			({ error, res: { posts, lastPage } }) => {
				if (error) {
					return;
				}

				setPosts(posts);
				setLastPage(lastPage);
			},
		);
	}, [requestServer, page]);

	return (
		<div className={className}>
			<div className="search-bar">
				<input type="text" placeholder="Поиск..." />
			</div>
			<div className="post-list">
				{posts.map(({ id, title, imageUrl, publishedAt, commentsCount }) => (
					<PostCard
						key={id}
						id={id}
						title={title}
						imageUrl={imageUrl}
						publishedAt={publishedAt}
						commentsCount={commentsCount}
					/>
				))}
			</div>
			{lastPage > 1 && (
				<Pagination page={page} lastPage={lastPage} setPage={setPage} />
			)}
		</div>
	);
};

export const Main = styled(MainContainer)`
	//display: flex;
	//flex-direction: column;
	//align-items: center;
	//
	//& .search-bar {
	//	margin: 20px 0;
	//}

	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
	}
`;

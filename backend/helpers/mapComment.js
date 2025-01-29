module.exports = function (comment) {
	return {
		content: comment.content,
		author: comment.author ? comment.author.login : 'Unknown',
		publishedAt: comment.createdAt,
	};
};

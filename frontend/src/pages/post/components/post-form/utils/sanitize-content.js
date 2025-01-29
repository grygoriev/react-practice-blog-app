export const sanitizeContent = (content) =>
	content
		.replace(/<br\s*\/?>/gi, '\n')
		.replace(/<\/?[^>]+(>|$)/g, '')
		.trim();

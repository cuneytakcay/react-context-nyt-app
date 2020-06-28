import { GET_DATA, SEARCH_ARTICLES } from './types';

export default (state, action) => {
	switch (action.type) {
		case GET_DATA:
			return {
				...state,
				articles: action.payload[0].data.articles,
				sources: action.payload[1].data.sources,
				title: `${action.payload[0].data.articles.length} Top-Headline Articles from the USA`
			};
		case SEARCH_ARTICLES:
			return {
				...state,
				articles: action.payload,
				title: `${action.payload.length} Articles About ${
					// keyword.charAt(0).toUpperCase() +
					// keyword.slice(1).toLowerCase()
				}`
			};
		default:
			return state;
	}
};

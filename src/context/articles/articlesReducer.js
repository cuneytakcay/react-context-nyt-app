import { GET_ARTICLES, SEARCH_ARTICLES, SET_LOADING } from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_ARTICLES:
			return {
				...state,
				articles: action.payload,
				title: `${action.payload.length} Random Articles from the NYT`,
				loading: false,
			};
		case SEARCH_ARTICLES:
			return {
				...state,
				articles: action.payload.articles,
				title: `${
					action.payload.articles.length
				} Articles with the keyword "${action.payload.data.keyword.trim()}"`,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};

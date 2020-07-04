import { GET_ARTICLES, SEARCH_ARTICLES, SET_LOADING } from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_ARTICLES:
			return {
				...state,
				articles: action.payload,
				title: `${action.payload.length} Top-Headline Articles from the USA`,
				loading: false,
			};
		case SEARCH_ARTICLES:
			return {
				...state,
				articles: action.payload.articles,
				title:
					action.payload.data.sourcePicker === 'source'
						? `${action.payload.articles.length} Articles from "${action.payload.data.source}"`
						: action.payload.data.categoryPicker === 'category'
						? `${
								action.payload.articles.length
						  } Articles in the "${action.payload.data.keyword.trim()}" Category`
						: `${
								action.payload.articles.length
						  } Articles about "${action.payload.data.keyword.trim()}"`,
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

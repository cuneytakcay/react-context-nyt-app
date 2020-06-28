import { GET_HEADLINES, GET_SOURCES, SEARCH_ARTICLES } from './types';

export default (state, action) => {
	switch (action.type) {
		case GET_HEADLINES:
			return {
				...state,
				articles: action.payload,
				title: `${action.payload.length} Top-Headline Articles from the USA`,
			};
		case GET_SOURCES:
			return {
				...state,
				sources: action.payload
			};
		case SEARCH_ARTICLES:
			return {
				...state,
				articles: action.payload,
				title: `${action.payload.length} Articles About`,
			};
		default:
			return state;
	}
};

// ${
// 	keyword.charAt(0).toUpperCase() +
// 	keyword.slice(1).toLowerCase()
// }

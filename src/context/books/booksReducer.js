import { GET_BOOKS, SEARCH_BOOKS, SET_BOOKS, SET_LOADING } from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_BOOKS:
			return {
				...state,
				books: action.payload,
				title: `${action.payload.length} Random books from the NYT`,
				loading: false,
			};
		case SEARCH_BOOKS:
			return {
				...state,
				books: action.payload.books,
				title: `${
					action.payload.books.length
				} books with the keyword "${action.payload.data.keyword.trim()}"`,
				loading: false,
			};
		case SET_BOOKS:
			return {
				...state,
				isBooks: action.payload,
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

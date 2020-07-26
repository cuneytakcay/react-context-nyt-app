import { GET_MOVIES, SEARCH_MOVIES, SET_MOVIES, SET_LOADING } from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_MOVIES:
			return {
				...state,
				movies: action.payload,
				title: `${action.payload.length} Random movies from the NYT`,
				loading: false,
			};
		case SEARCH_MOVIES:
			return {
				...state,
				movies: action.payload.movies,
				title: `${
					action.payload.movies.length
				} movies with the keyword "${action.payload.data.keyword.trim()}"`,
				loading: false,
			};
		case SET_MOVIES:
			return {
				...state,
				isMovies: action.payload,
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

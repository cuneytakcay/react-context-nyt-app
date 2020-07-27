import React, { useReducer } from 'react';
import axios from 'axios';
import MoviesContext from './moviesContext';
import MoviesReducer from './moviesReducer';
import { SEARCH_MOVIES, GET_MOVIES, SET_MOVIES, SET_LOADING } from '../types';

const apiKey = process.env.REACT_APP_ARTICLE_API_KEY;

const MoviesState = props => {
	const initialState = {
		movies: [],
		title: '',
		loading: false,
		isMovies: false,
	};

	const [state, dispatch] = useReducer(MoviesReducer, initialState);

	// Get ... movies from NYT to display when movies radio button selected
	const getMovies = async () => {
		setLoading();

		const res = await axios.get(
			`https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=${apiKey}`
		);

		dispatch({
			type: GET_MOVIES,
			payload: res.data.results,
		});

		console.log(res.data.results);
	};

	// Search movies by title
	const searchMovies = async data => {
		setLoading();

		const res = await axios.get(
			`https://api.nytimes.com/svc/books/v3/reviews.json?title=${data.keyword.trim()}&api-key=${apiKey}`
		);

		dispatch({
			type: SEARCH_MOVIES,
			payload: {
				data: data,
				books: res.data.results,
			},
		});
	};

	// Set Movies container when selected
	const setMoviesState = state => {
		dispatch({
			type: SET_MOVIES,
			payload: state,
		});
	};

	// Set Loading to display spinner
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<MoviesContext.Provider
			value={{
				movies: state.movies,
				title: state.title,
				loading: state.loading,
				isMovies: state.isMovies,
				getMovies,
				searchMovies,
				setMoviesState,
			}}
		>
			{props.children}
		</MoviesContext.Provider>
	);
};

export default MoviesState;

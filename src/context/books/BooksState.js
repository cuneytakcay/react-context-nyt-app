import React, { useReducer } from 'react';
import axios from 'axios';
import BooksContext from './booksContext';
import BooksReducer from './booksReducer';
import { SEARCH_BOOKS, GET_BOOKS, SET_LOADING } from '../types';

const apiKey = process.env.REACT_APP_ARTICLE_API_KEY;

const BooksState = props => {
	const initialState = {
		books: [],
		title: '',
		loading: false,
	};

	const [state, dispatch] = useReducer(BooksReducer, initialState);

	// Get books from NYT to display when books radio button selected
	const getBooks = async () => {
		setLoading();

		const res = await axios.get(
			`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}`
		);

		dispatch({
			type: GET_BOOKS,
			payload: res.data.response.docs,
		});
	};

	// Search books by keyword and publish date
	const searchBooks = async data => {
		setLoading();

		const res = await axios.get(
			`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${data.keyword.trim()}&begin_date=${
				data.beginDate
			}&end_date=${data.endDate}&api-key=${apiKey}`
		);

		dispatch({
			type: SEARCH_BOOKS,
			payload: {
				data: data,
				books: res.data.response.docs,
			},
		});
	};

	// Set Loading to display spinner
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<BooksContext.Provider
			value={{
				books: state.books,
				title: state.title,
				loading: state.loading,
				getBooks,
				searchBooks,
			}}
		>
			{props.children}
		</BooksContext.Provider>
	);
};

export default BooksState;

import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import ArticlesContext from './articlesContext';
import ArticlesReducer from './articlesReducer';
import { SEARCH_ARTICLES, GET_ARTICLES, SET_LOADING } from '../types';

const apiKey = process.env.REACT_APP_ARTICLE_API_KEY;

const ArticlesState = props => {
	const initialState = {
		articles: [],
		title: '',
		loading: false,
	};

	const [state, dispatch] = useReducer(ArticlesReducer, initialState);

	// Get articles from NYT to display at the first page load
	const getArticles = async () => {
		setLoading();

		const res = await axios.get(
			`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}`
		);

		dispatch({
			type: GET_ARTICLES,
			payload: res.data.response.docs,
		});
	};

	useEffect(() => {
		getArticles();
		// eslint-disable-next-line
	}, []);

	// Search articles by keyword and publish date
	const searchArticles = async data => {
		setLoading();

		const res = await axios.get(
			`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${data.keyword.trim()}&begin_date=${
				data.beginDate
			}&end_date=${data.endDate}&api-key=${apiKey}`
		);

		dispatch({
			type: SEARCH_ARTICLES,
			payload: {
				data: data,
				articles: res.data.response.docs,
			},
		});
	};

	// Set Loading to display spinner
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<ArticlesContext.Provider
			value={{
				articles: state.articles,
				title: state.title,
				loading: state.loading,
				searchArticles,
			}}
		>
			{props.children}
		</ArticlesContext.Provider>
	);
};

export default ArticlesState;

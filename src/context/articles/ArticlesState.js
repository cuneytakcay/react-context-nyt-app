import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import ArticlesContext from './articlesContext';
import ArticlesReducer from './articlesReducer';
import { SEARCH_ARTICLES, GET_ARTICLES, SET_LOADING } from '../types';

const ArticlesState = props => {
	const initialState = {
		articles: [],
		sources: [],
		title: '',
		loading: false,
	};

	const [state, dispatch] = useReducer(ArticlesReducer, initialState);

	let apiKey;
	if (process.env.NODE_ENV !== 'production') {
		apiKey = process.env.REACT_APP_ARTICLE_FINDER_API_KEY;
	} else {
		apiKey = process.env.ARTICLE_FINDER_API_KEY;
	}

	// Fetch top headlines from the USA display at the first page load
	const fetchArticles = async () => {
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
		fetchArticles();
		// eslint-disable-next-line
	}, []);

	// Fetch the article sources to populate in the sources dropdown
	const fetchSources = async () => {
		const res = await axios.get(
			`https://newsapi.org/v2/sources?language=en&apiKey=${apiKey}`
		);

		// dispatch({
		// 	type: GET_SOURCES,
		// 	payload: res.data.sources,
		// });
	};

	// Search articles by keyword and publish date
	const searchArticle = async data => {
		setLoading();

		let res = {};

		if (data.keywordPicker === 'keyword') {
			res = await axios.get(
				`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${data.keyword.trim()}&begin_date=${
					data.beginDate
				}&end_date=${data.endDate}&api-key=${apiKey}`
			);
		} else if (data.categoryPicker === 'category') {
			res = await axios.get(
				`https://newsapi.org/v2/top-headlines?country=us&category=${data.keyword.trim()}&pageSize=24&from=${
					data.firstDate
				}&to=${data.lastDate}&sortBy=publishedAt&apiKey=${apiKey}`
			);
		} else if (data.sourcePicker === 'source') {
			res = await axios.get(
				`https://newsapi.org/v2/everything?sources=${data.source}&language=en&pageSize=24&from=${data.firstDate}&to=${data.lastDate}&sortBy=publishedAt&apiKey=${apiKey}`
			);
		}

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
				sources: state.sources,
				title: state.title,
				loading: state.loading,
				fetchSources,
				searchArticle,
			}}
		>
			{props.children}
		</ArticlesContext.Provider>
	);
};

export default ArticlesState;
